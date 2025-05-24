import { Outlet } from 'react-router-dom';


function HomeLayout() {
  return (
    <div>
      <Outlet />
      <h1>Home layout</h1>
    </div>
  );
}

export default HomeLayout;