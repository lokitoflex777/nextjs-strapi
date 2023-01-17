import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "../helpers";
import styles from "../styles/Entrada.module.css";

const Entrada = ({ entrada }) => {
  const { titulo, resumen, publishedAt, imagen } = entrada.attributes;
  const { id } = entrada;

  return (
    <article>
      <Image
        priority="true"
        width={600}
        height={300}
        src={imagen.data.attributes.url}
        alt={`imagen blog ${titulo}`}
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link className={styles.enlace} href={`/api/blogs/${id}`}>
          Leer Entrada
        </Link>
      </div>
    </article>
  );
};

export default Entrada;
