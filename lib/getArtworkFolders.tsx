import fs from 'fs/promises';
import path from 'path';

export interface ArtworkFolder {
  name: string;
  images: string[];
}

export async function getArtworkFolders(): Promise<ArtworkFolder[]> {
  const artworksPath = path.join(process.cwd(), 'public', 'Artworks');
  
  try {
    // Read all folders in the Artworks directory
    const folderEntries = await fs.readdir(artworksPath, { withFileTypes: true });
    
    const folders = folderEntries
      .filter(entry => entry.isDirectory())
      .map(async (folder) => {
        const folderName = folder.name;
        const folderPath = path.join(artworksPath, folderName);
        
        // Read image files in the folder
        const imageEntries = await fs.readdir(folderPath);
        const images = imageEntries
          .filter(file => 
            ['.jpg', '.jpeg', '.png', '.gif', '.webp'].some(ext => 
              file.toLowerCase().endsWith(ext)
            )
          )
          .map(image => `/Artworks/${folderName}/${image}`);

        return {
          name: folderName,
          images
        };
      });

    // Wait for all folder promises to resolve
    return Promise.all(folders);
  } catch (error) {
    console.error('Error reading artwork folders:', error);
    return [];
  }
}