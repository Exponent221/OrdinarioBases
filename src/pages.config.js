import Home from './pages/Home';
import Materias from './pages/Materias';
import Profesores from './pages/Profesores';
import Alumnos from './pages/Alumnos';
import Grupos from './pages/Grupos';
import Inscripciones from './pages/Inscripciones';
import Calificaciones from './pages/Calificaciones';
import StudentNotes from './pages/StudentNotes';
import MisInscripciones from './pages/MisInscripciones';
import MisCalificaciones from './pages/MisCalificaciones';
import MisNotas from './pages/MisNotas';
import Documentation from './pages/Documentation';


export const PAGES = {
    "Home": Home,
    "Materias": Materias,
    "Profesores": Profesores,
    "Alumnos": Alumnos,
    "Grupos": Grupos,
    "Inscripciones": Inscripciones,
    "Calificaciones": Calificaciones,
    "StudentNotes": StudentNotes,
    "MisInscripciones": MisInscripciones,
    "MisCalificaciones": MisCalificaciones,
    "MisNotas": MisNotas,
    "Documentation": Documentation,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
};