const ProgressBar = ({bgcolor,uploadPercentage}) => {

    const progressBarContainer = {
      height: 40,
      width: '80%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50
    }
  
    const fillColorStyles = {
      height: '100%',
      width: `${uploadPercentage}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out',
    }
  
    const percentageStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={progressBarContainer}>
        <div style={fillColorStyles}>
          <span style={percentageStyles}>{`${uploadPercentage}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;