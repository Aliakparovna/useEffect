import classes from "./Photos.module.css";

const Photos = ({ title, id, url }) => {
  console.log({ title });

  return (
    <div className={classes.photo}>
      <h2>{title}</h2>
      <div className={classes.photo2}>{id}</div>
      <div>
        <img src={url} alt={title} />
      </div>
    </div>
  );
};

export default Photos;
