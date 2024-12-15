import React from "react";
import ReactDOM from "react-dom";

const rootDiv = document.getElementById('root');

ReactDOM.createRoot(rootDiv).render(
  // Only One Parent can be passed with multiple children
  <div>
    <h1>First React Project</h1>
    <h2>Hassaan Ahmed Khan</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos possimus quas natus ullam pariatur? Perspiciatis, quidem illum. Ea explicabo quaerat, vitae incidunt enim minima eum aliquam, qui impedit perspiciatis cum! Quasi, sapiente soluta, pariatur reiciendis tempora consectetur nulla molestias ut, eos ipsam sit consequatur obcaecati sunt? Placeat reprehenderit eum, soluta vel dolores sed molestias, voluptatum obcaecati nam ex enim nisi asperiores iusto, eveniet neque perferendis? Nesciunt molestias dolor quidem quas reiciendis id molestiae quaerat, quibusdam doloribus, optio accusantium maxime suscipit dolorem voluptatem. Eos, at. Iure suscipit nam deleniti incidunt consectetur cumque optio dolorum provident vero hic esse, assumenda nulla officiis.</p>
    <img src="/public/vite.svg" alt="" />
    <img src="/src/assets/react.svg" alt="" />
  </div>
)