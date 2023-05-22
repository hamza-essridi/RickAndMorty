import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={classes.container}>
      <article>
        <h2>{props.name}</h2>
        <div>
          <img src={props.image} />
        </div>
        <div>
          <h4>{props.status}</h4>
          <h4>{props.species}</h4>
          <h4>{props.gender}</h4>
        </div>
      </article>
    </div>
  );
};
export default Card;
