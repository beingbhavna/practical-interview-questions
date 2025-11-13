using System.IO.Compression;

using System.Text.RegularExpressions;
 
namespace MoveZipFiles

{

    class Program

    {

        static void Main(string[] args)

        {

            string baseDir = @"C:\Users\Satyam\Downloads\QP\QP\";
 
            // ======================

            // 1. Handle Questions

            // ======================

            string questionsDir = Path.Combine(baseDir, "questions");
 
            if (!Directory.Exists(questionsDir))

            {

                Directory.CreateDirectory(questionsDir);

                Console.WriteLine($"Created folder: {questionsDir}");

            }
 
            string[] baseZipFiles = Directory.GetFiles(baseDir, "*.zip");
 
            foreach (string file in baseZipFiles)

            {

                string fileName = Path.GetFileName(file);
 
                if (fileName.StartsWith("questions-package", StringComparison.OrdinalIgnoreCase) ||

                    fileName.StartsWith("questions-key", StringComparison.OrdinalIgnoreCase))

                {

                    string destPath = Path.Combine(questionsDir, fileName);
 
                    try

                    {

                        File.Move(file, destPath, overwrite: true);

                        Console.WriteLine($"[Questions] Moved: {fileName}");

                        // ✅ For questions, we ONLY move. No extraction needed.

                    }

                    catch (Exception ex)

                    {

                        Console.WriteLine($"[Questions] Error moving {fileName}: {ex.Message}");

                    }

                }

            }
 
            // ======================

            // 2. Handle Answers

            // ======================

            string sourceRoot = @"C:\Users\Satyam\Downloads\QP\QP\";

            string qpOnlyRoot = Path.Combine(sourceRoot, "qp_only");
 
            // Regex: answers-key-xxxx-shift1.zip OR answers-package-xxxx-shift2.zip

            Regex pattern = new Regex(@"^answers-(key|package)-([a-z0-9]+)-(shift\d+)", RegexOptions.IgnoreCase);
 
            // All .zip files in sourceRoot

            string[] answerZips = Directory.GetFiles(sourceRoot, "*.zip");
 
            // Get all date folders under qp_only

            string[] dateFolders = Directory.GetDirectories(qpOnlyRoot);
 
            foreach (string file in answerZips)

            {

                string fileName = Path.GetFileName(file);

                Match match = pattern.Match(fileName);
 
                if (match.Success)

                {

                    string packageId = match.Groups[2].Value;   // e.g., e967719wutkqg

                    string shift = match.Groups[3].Value;       // e.g., shift2
 
                    bool moved = false;
 
                    foreach (string dateFolder in dateFolders) // 20Sept2025, 21Sept2025...

                    {

                        // Build package path under this date

                        string packageFolder = $"package-{packageId}-{shift.Replace("shift", "shift-")}";

                        string answersDir = Path.Combine(dateFolder, shift, packageFolder, "answers");
 
                        // ✅ Only copy if the full path exists

                        if (Directory.Exists(answersDir))

                        {

                            string destPath = Path.Combine(answersDir, fileName);
 
                            try

                            {

                                File.Copy(file, destPath, overwrite: true);

                                //File.Move(file, destPath, true);

                                Console.WriteLine($"[Answers] Copied {fileName} → {answersDir}");
 
                                // Extract, rename, and cleanup

                                ExtractAndRename(destPath, answersDir);
 
                                moved = true;

                                break; // once copied, stop checking other date folders

                            }

                            catch (Exception ex)

                            {

                                Console.WriteLine($"[Answers] Error processing {fileName}: {ex.Message}");

                            }

                        }

                    }
 
 
                    if (!moved)

                    {

                        Console.WriteLine($"⚠ Could not place {fileName} in any date folder.");

                    }

                }

            }
 
 
            // ======================

            // Helper Method

            // ======================

            static void ExtractAndRename(string zipPath, string answersDir)

            {

                string tempExtractDir = Path.Combine(answersDir, Path.GetFileNameWithoutExtension(zipPath));

                if (Directory.Exists(tempExtractDir))

                    Directory.Delete(tempExtractDir, true);
 
                ZipFile.ExtractToDirectory(zipPath, tempExtractDir);
 
                foreach (var extractedFile in Directory.GetFiles(tempExtractDir))

                {

                    string extractedName = Path.GetFileName(extractedFile);
 
                    // Remove "-ap-vX"

                    string newName = extractedName;

                    int idx = newName.IndexOf("-ap-v", StringComparison.OrdinalIgnoreCase);

                    if (idx > 0)

                        newName = newName.Substring(0, idx);
 
                    // Fix extension

                    if (extractedName.EndsWith(".ixdb", StringComparison.OrdinalIgnoreCase))

                        newName = Path.ChangeExtension(newName, ".vdb6");

                    else if (extractedName.EndsWith(".txt", StringComparison.OrdinalIgnoreCase))

                        newName = Path.ChangeExtension(newName, ".txt");
 
                    string destFile = Path.Combine(answersDir, newName);

                    File.Move(extractedFile, destFile, true);

                    Console.WriteLine($"[Answers] Placed: {destFile}");

                }
 
                // Cleanup

                Directory.Delete(tempExtractDir, true);

                File.Delete(zipPath); // remove zip after successful extraction

                Console.WriteLine($"[Answers] Deleted original zip: {Path.GetFileName(zipPath)}");

            }
 
 
        }

    }

}
 