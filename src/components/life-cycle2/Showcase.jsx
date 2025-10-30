const Showcase = ({ dogs }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        gap: '2%',
        marginTop: '1vh',
      }}
    >
      {dogs.map((dog) => (
        <img key={dogs.indexOf(dog)} src={`${dog}`} width={'18%'} />
      ))}
    </div>
  );
};

export default Showcase;
