const fs = require('fs');
const path = require('path');

// Go up one directory from /utils to the project root
const projectRoot = path.join(__dirname, '..'); 

const publicDir = path.join(projectRoot, 'public/images');
const dataDir = path.join(projectRoot, 'data');
const outputFile = path.join(dataDir, 'directoryMap.json');

console.log('Scanning for apartment image directories...');

try {
  // Get all directories inside /public
  const apartmentDirs = fs.readdirSync(publicDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const directoryMap = {};

  for (const dirName of apartmentDirs) {
    // Check if the directory name matches our apartment ID pattern (e.g., A32, B14)
    // This is a simple check; you could make it more robust if needed.
    if (/^[A-Z]\d+$/.test(dirName)) {
      const apartmentDirPath = path.join(publicDir, dirName);
      // Get all files inside the apartment directory
      const files = fs.readdirSync(apartmentDirPath)
        .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file)); // Only include common image formats

      if (files.length > 0) {
        directoryMap[dirName] = files;
        console.log(`Found ${files.length} images in /public/${dirName}`);
      }
    }
  }

  // Ensure the /data directory exists
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }

  // Write the resulting map to a JSON file
  fs.writeFileSync(outputFile, JSON.stringify(directoryMap, null, 2));
  console.log(`Successfully generated image map at ${outputFile}`);

} catch (error) {
  console.error('Error generating image map:', error);
}
