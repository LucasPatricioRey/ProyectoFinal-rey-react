import { initializeApp } from "firebase/app";
import { getFirestore, orderBy, collection, getDocs, doc, getDoc, query, where, addDoc, writeBatch } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCc7rF4gu0ExOejaMPoZkiT-oRoe5WBx_c",
    authDomain: "tkl-farmacia.firebaseapp.com",
    projectId: "tkl-farmacia",
    storageBucket: "tkl-farmacia.appspot.com",
    messagingSenderId: "673699764783",
    appId: "1:673699764783:web:8330fc4765cfa58dc244da",
    measurementId: "G-2SMQYNP1TL"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItems() {
  const productsRef = collection(db, "products");

  const q = query(productsRef, orderBy("index"));
  const productsSnap = await getDocs(q);
  const documents = productsSnap.docs;

  const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return docsData;
}

export async function getSingleItem(idURL) {
  //referencia
  const docRef = doc(db, "products", idURL);
  //snapshot
  const docSnap = await getDoc(docRef);
  return { id: docSnap.id, ...docSnap.data() };
}

export async function getItemsByCategory(categoryid) {
  const productsRef = collection(db, "products");

  const q = query(productsRef, where("category", "==", categoryid));

  const productsSnap = await getDocs(q);
  const documents = productsSnap.docs;

  const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return docsData;
}

export async function createOrder(order) {
  const collectionOrdersRef = collection(db, "orders");
  const response = await addDoc(collectionOrdersRef, order);
  return response.id; 
}

export async function exportData() {
  const products = [
      {
          id: 1,
          title: "Actron 400",
          img: "https://i.ibb.co/QPkZxvr/Actron-400.png",
          category: "Actron",
          stock: 30,
          price: 430,
      },
      {
          id: 2,
          title: "Actron 600",
          img: "https://i.ibb.co/KKnZYrT/Actron-600.png",
          category: "Actron",
          stock: 30,
          price: 630,
      },
      {
          id: 3,
          title: "Actron Plus",
          img: "https://i.ibb.co/D1JnxNS/Actron-plus.png",
          category: "Actron",
          stock: 30,
          price: 855,
      },
      {
          id: 4,
          title: "Actron Gel",
          img: "https://i.ibb.co/pdqfpBS/Actron-gel.png",
          category: "Actron",
          stock: 30,
          price: 900,
      },
      {
          id: 5,
          title: "Actron Pediatrico 2%",
          img: "https://i.ibb.co/5cMMKWb/Actron-pediatrico.png",
          category: "Actron",
          stock: 30,
          price: 150,
      },
  
  
      {
      id: 6,
      title: "Ibupirac 400",
      img: "https://i.ibb.co/8mgFxvh/Ibupirac-400.png",
      category: "Ibupirac",
          stock: 30,
          
      
      price: 530
  },
  {
      id: 7,
      title: "Ibupirac 600",
      img: "https://i.ibb.co/GxXb0Yd/Ibupirac-600.png",
      category: "Ibupirac",
          stock: 30,
          
      
      price: 785
  },
  {
      id:8,
      title: "Ibupirac Fem",
      img: "https://i.ibb.co/R6kzDwS/Ibupirac-fem.png",
      category: "Ibupirac",
          stock: 30,
          
      
      price: 550
  },
  {
      id:9,
      title: "Ibupirac Flex 600",
      img: "https://i.ibb.co/7vP8562/Ibupirac-flex-600.png",
      category: "Ibupirac",
          stock: 30,
          
      
      price: 830
  },
  {
      id:10,
      title: "Ibupirac Plus Max",
      img: "https://i.ibb.co/CKLLkK6/Ibupirac-plus-max.png",
      category: "Ibupirac",
          stock: 30,
          
      
      price: 1080
  },
  
  {
      id:11,
      title: "Ibu 400",
      img: "https://i.ibb.co/Z250tBX/Ibu-400.png",
      category: "Ibu",
          stock: 30,
          
      
      price: 330
  },
  {
      id:12,
      title: "Ibu 600",
      img: "https://i.ibb.co/PzD2g24/Ibu-600.png",
      category: "Ibu",
          stock: 30,
          
      
      price: 462
  },
  {
      id:13,
      title: "IbuEvanol",
      img: "https://i.ibb.co/8jP9vzy/Ibu-Evanol.png",
      category: "Ibu",
          stock: 30,
          
      
      price: 500
  },
  {
      id:14,
      title: "IbuEvanol Forte",
      img: "https://i.ibb.co/XsgWH8X/Ibu-Evanol-forte.png",
      category: "Ibu",
          stock: 30,
          
      
      price: 635
  },
  {
      id:15,
      title: "IbuEvanol Max",
      img: "https://i.ibb.co/m5Pzjyt/Ibu-Evanolmax.png",
      category: "Ibu",
          stock: 30,
          
      
      price: 840
  },
  ];

const collectionRef = collection(db, "products");
  for (let item of products) {
  item.index = item.id;
  delete item.id;
  const response = await addDoc(collectionRef, item);
  console.log("producto exportado con ID: " + response.id);
  }
}

export async function exportDataWithBatch() {
const products = [
  {
      id: 1,
      title: "Actron 400",
      img: "https://i.ibb.co/QPkZxvr/Actron-400.png",
      category: "Actron",
      stock: 30,
      price: 430,
  },
  {
      id: 2,
      title: "Actron 600",
      img: "https://i.ibb.co/KKnZYrT/Actron-600.png",
      category: "Actron",
      stock: 30,
      price: 630,
  },
  {
      id: 3,
      title: "Actron Plus",
      img: "https://i.ibb.co/D1JnxNS/Actron-plus.png",
      category: "Actron",
      stock: 30,
      price: 855,
  },
  {
      id: 4,
      title: "Actron Gel",
      img: "https://i.ibb.co/pdqfpBS/Actron-gel.png",
      category: "Actron",
      stock: 30,
      price: 900,
  },
  {
      id: 5,
      title: "Actron Pediatrico 2%",
      img: "https://i.ibb.co/5cMMKWb/Actron-pediatrico.png",
      category: "Actron",
      stock: 30,
      price: 150,
  },


  {
  id: 6,
  title: "Ibupirac 400",
  img: "https://i.ibb.co/8mgFxvh/Ibupirac-400.png",
  category: "Ibupirac",
      stock: 30,
      
  
  price: 530
},
{
  id: 7,
  title: "Ibupirac 600",
  img: "https://i.ibb.co/GxXb0Yd/Ibupirac-600.png",
  category: "Ibupirac",
      stock: 30,
      
  
  price: 785
},
{
  id:8,
  title: "Ibupirac Fem",
  img: "https://i.ibb.co/R6kzDwS/Ibupirac-fem.png",
  category: "Ibupirac",
      stock: 30,
      
  
  price: 550
},
{
  id:9,
  title: "Ibupirac Flex 600",
  img: "https://i.ibb.co/7vP8562/Ibupirac-flex-600.png",
  category: "Ibupirac",
      stock: 30,
      
  
  price: 830
},
{
  id:10,
  title: "Ibupirac Plus Max",
  img: "https://i.ibb.co/CKLLkK6/Ibupirac-plus-max.png",
  category: "Ibupirac",
      stock: 30,
      
  
  price: 1080
},

{
  id:11,
  title: "Ibu 400",
  img: "https://i.ibb.co/Z250tBX/Ibu-400.png",
  category: "Ibu",
      stock: 30,
      
  
  price: 330
},
{
  id:12,
  title: "Ibu 600",
  img: "https://i.ibb.co/PzD2g24/Ibu-600.png",
  category: "Ibu",
      stock: 30,
      
  
  price: 462
},
{
  id:13,
  title: "IbuEvanol",
  img: "https://i.ibb.co/8jP9vzy/Ibu-Evanol.png",
  category: "Ibu",
      stock: 30,
      
  
  price: 500
},
{
  id:14,
  title: "IbuEvanol Forte",
  img: "https://i.ibb.co/XsgWH8X/Ibu-Evanol-forte.png",
  category: "Ibu",
      stock: 30,
      
  
  price: 635
},
{
  id:15,
  title: "IbuEvanol Max",
  img: "https://i.ibb.co/m5Pzjyt/Ibu-Evanolmax.png",
  category: "Ibu",
      stock: 30,
      
  
  price: 840
},
];


const collectionRef = collection(db, "products");
const batch = writeBatch(db);

for (let item of products) {
item.index = item.id;
delete item.id;
const newDoc = doc(collectionRef);

batch.set(newDoc, item);
}

await batch.commit();
}