import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Pie,
  Ecommerce,
  Orders,
  Pyramid,
  Stacked,
} from "./Pages";
import Navbar from "./Components/Navbar";

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <div className="flex flex-no-wrap">
          <Sidebar/>
          <div className=" w-full h-screen overflow-y-scroll">
            {/* Navigation starts */}
            <Navbar/>
            {/* Navigation ends */}
            <div>
            <Routes>
								{/* Dashboard */}
								<Route path="/" element={<Ecommerce />} />
								<Route path="/ecommerce" element={<Ecommerce />} />

								{/* Pages */}
								<Route path="/orders" element={<Orders />} />
								<Route path="/employees" element={<Employees />} />
								<Route path="/customers" element={<Customers />} />

								{/* Apps */}
								<Route path="/kanban" element={<Kanban />} />
								<Route path="/editor" element={<Editor />} />
								<Route path="/calendar" element={<Calendar />} />
								<Route path="/color-picker" element={<ColorPicker />} />

								{/* Charts */}
								<Route path="/line" element={<Line />} />
								<Route path="/area" element={<Area />} />
								<Route path="/bar" element={<Bar />} />
								<Route path="/pie" element={<Pie />} />
								<Route path="/financial" element={<Financial />} />
								<Route path="/color-mapping" element={<ColorMapping />} />
								<Route path="/pyramid" element={<Pyramid />} />
								<Route path="/stacked" element={<Stacked />} />

								{/* Not Found */}
								<Route path="*" element="Error 404, Not Found" />
							</Routes>
              
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
