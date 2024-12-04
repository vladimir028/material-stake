import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MaterialsPage from "./pages/MaterialsPage";
import AllSubjects from "./pages/AllSubjects";
import RegisterPageMaterialUI from "./pages/RegisterPageMaterialUI";
import ComputerAnimation from "./components/animation/computer/ComputerAnimation";
import ForumPage from "./pages/ForumPage";
import LoginPageMaterialUI from "./pages/LoginPageMaterialUI";
import UploadMaterials from "./components/materials/UploadMaterials";
import AttachmentPage from "./pages/AttachmentPage";

function App() {

    return (
        <div className="Main">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/homepage" element={< HomePage/>}/>
                    <Route path="/materials" element={<MaterialsPage/>}/>
                    <Route path="/subjects" element={<AllSubjects/>}/>
                    <Route path="/register" element={<RegisterPageMaterialUI/>}/>
                    <Route path="/login" element={<LoginPageMaterialUI/>}/>
                    <Route path={"/materials/forum/:id"} element={<ForumPage/>}/>
                    <Route path={"/materials/upload/:id"} element={<AttachmentPage/>}/>

                    {/*TESTING PURPOSES*/}
                    <Route path="/animationComputer" element={<ComputerAnimation/>}/>
                    <Route path={"/materials/upload"} element={<UploadMaterials/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;

