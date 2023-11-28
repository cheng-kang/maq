import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ref, listAll, getStorage, getDownloadURL } from "firebase/storage";
import { initializeFirebase } from "../common/firebase";
import Frame from "../components/Frame/Frame";

const Home: NextPage = () => {
  const app = initializeFirebase();
  const [imageUrl, setImageUrl] = React.useState<undefined | string>(undefined);

  React.useEffect(() => {
    const storage = getStorage(app);
    // Create a reference under which you want to list
    const listRef = ref(storage, "sunset");

    // Find all the prefixes and items.
    listAll(listRef)
      .then((res) => {
        Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef))).then(
          (res) => {
            console.log(res);
          }
        );
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  }, [app]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Anqiao Mai</title>
        <meta name="description" content="You only live once." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <div
          className={styles.glass}
          style={{
            fontSize: "1.4em",
            margin: "32px 16px",
            padding: "16px",
            display: "inline-block",
            borderRadius: 24,
          }}
        >
          ANQIAO MAI
        </div>
      </div>

      {/* <Image
        className={styles.background}
        alt="random sunset image"
        layout={"fill"}
        src="https://firebasestorage.googleapis.com/v0/b/maianqiao.appspot.com/o/sunset%2FIMG_4844.JPG?alt=media&token=595318fb-17e2-4aca-afc4-2ddd1afbc955"
      />
      <div className={styles.glass}></div>
      <div className={styles.main}>
        <div className={styles.imageContainer}>
          <img
            alt="random sunset image"
            style={{ objectFit: "contain" }}
            src="https://firebasestorage.googleapis.com/v0/b/maianqiao.appspot.com/o/sunset%2FIMG_4844.JPG?alt=media&token=595318fb-17e2-4aca-afc4-2ddd1afbc955"
          />
        </div>
        <div className={styles.header}>
          <div className={styles.headerTitle}>Anqiao Mai</div>
        </div>
      </div> */}
      {/* <div
        style={{
          position: "absolute",
          left: 32,
          right: 32,
          top: 32,
          bottom: 32,
        }}
      >
        <Frame />
      </div> */}
    </div>
  );
};

export default Home;
