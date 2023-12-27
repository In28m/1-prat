const App = () => {
    return (
      <>
        <div className="container">
          <div className="logo">
          <img src="logo.png" alt="" />
      </div>
      <div className="bg">
        <a href="#">Home</a>
        <a href="#">Product</a>
        <a href="#">Company</a>
        <a href="#">Contact</a>
      </div>

      <div className="header">
        <h1>Header image</h1>
      </div>

      <div className="info">
        <div className="one">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat sunt non, quas esse veritatis temporibus deserunt blanditiis pariatur beatae repudiandae provident nemo odit necessitatibus consequatur velit perferendis architecto ratione!
          </p>
        </div>
        <div className="two">
          <h1>Company</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat sunt non, quas esse veritatis temporibus deserunt blanditiis pariatur beatae repudiandae provident nemo odit necessitatibus consequatur velit perferendis architecto ratione!
          </p>
        </div>
        <div className="three">
          <h1>Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat sunt non, quas esse veritatis temporibus deserunt blanditiis pariatur beatae repudiandae provident nemo odit necessitatibus consequatur velit perferendis architecto ratione!
          </p>
        </div>
      </div>

      <div className="content">
      <div className="content-sub">
        <h1>Content</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, totam nihil cupiditate illo minima eos voluptatibus quaerat natus dolorem molestias recusandae ut fuga a dignissimos aut molestiae perferendis dolores accusamus?
        </p>
        <h1>Sub header</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit at nobis, quidem laborum, nostrum error obcaecati inventore modi quae asperiores. Sequi est voluptatum inventore veritatis magnam voluptate adipisci necessitatibus!
        </p>
      </div>

      <div className="navigation">
      <h1>Navigation</h1>
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Company</a>
          <a href="#">Contact</a>
        </div>
    </div>
    </div>
      </>
    );
  };

  ReactDOM.createRoot(document.getElementById('app')).render(<App />);