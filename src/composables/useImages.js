import { computed } from 'vue';
import { ref as storageRef } from 'firebase/storage';
import { useFirebaseStorage, useStorageFile } from 'vuefire';
import { uid } from 'uid';

export default function useImage() {
  const storage = useFirebaseStorage();
  const storageRefPath = storageRef(storage, `/imagenes/${uid()}.jpg`);
  const { url, upload, metadata } = useStorageFile(storageRefPath);

  function uploadImage(e) {
    const data = e.target.files;
    if (data) {
      upload(data);
    }
  }

  const isThereImage = computed(() => {
    return url.value ? url.value : null;
  });

  return {
    url,
    uploadImage,
    isThereImage,
  };
}
