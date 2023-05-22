import classes from "./CardList.module.css";
import Card from "../card/Card";
const CardList = (props) => {
  return (
    <div className={classes.cardlist}>
      {props.Characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          image={character.image}
        />
      ))}
    </div>
  );
};
export default CardList;
