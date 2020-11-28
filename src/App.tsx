import * as React from "react";

const ALL_NAMES = ["foo", "bar", "baz"];

interface NameListItemProps {
  readonly name: string;
  readonly onNameClick: (clickedName: string) => void;
}

const NameListItem: React.FC<NameListItemProps> = (
  props: NameListItemProps
) => (
  <li>
    <button onClick={() => props.onNameClick(props.name)}>{props.name}</button>
  </li>
);

const NameList: React.FC = () => {
  const [clickedNames, setClickedNames] = React.useState<string[]>([]);

  const onNameClick = (clickedName: string) => {
    setClickedNames([...clickedNames, clickedName]);
  };

  return (
    <div>
      <h1>
        {!clickedNames.length
          ? "No Name Clicked Yet"
          : clickedNames[clickedNames.length - 1]}
      </h1>
      <ul>
        {ALL_NAMES.filter((name) => !clickedNames.includes(name)).map(
          (name: string, id: number) => (
            <NameListItem 
              key={id} 
              name={name} 
              onNameClick={onNameClick} />
          )
        )}
      </ul>
    </div>
  );
};

export default NameList;
