const Tooltip = ({ children, text, ...rest }) => {
    const [show, setShow] = React.useState(false);
  
    return (
      <div className="tooltip-container">
        <div className={show ? 'tooltip-box visible' : 'tooltip-box'}>
          {text}
          <span className="tooltip-arrow" />
        </div>
        <div
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          {...rest}
        >
          {children}
        </div>
      </div>
    );
  };
  
  ReactDOM.render(
    <Tooltip text="Simple tooltip">
      <button>Hover me!</button>
    </Tooltip>,
    document.getElementById('root')
  );