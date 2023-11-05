import { computed } from 'vue';
import {
  useFirestore,
  useCollection,
  useFirebaseStorage,
  useStorageFile,
} from 'vuefire';
import { collection, doc, deleteDoc } from 'firebase/firestore';
import { ref as storageRef, deleteObject } from 'firebase/storage';
import { uid } from 'uid';

export default function useBlogs() {
  const db = useFirestore();
  const storage = useFirebaseStorage();
  const postsCollection = useCollection(collection(db, 'posts'));
  const storageRefPath = storageRef(storage, `/imagenesBlog/${uid()}.jpg`);
  const { url, upload } = useStorageFile(storageRefPath);

  function uploadImage(e) {
    const data = e.target.files[0];
    if (data) {
      upload(data);
    }
  }

  async function deletePost(id, urlImage) {
    if (confirm('¿Deseas Eliminar? - Esta acción no tiene reversa')) {
      const docRef = doc(db, 'posts', id);
      const imaRef = storageRef(storage, urlImage);
      await Promise.all([deleteDoc(docRef), deleteObject(imaRef)]);
    }
  }

  const isThereImage = computed(() => {
    return url.value ? url.value : null;
  });

  return {
    postsCollection,
    uploadImage,
    isThereImage,
    deletePost,
  };
}
