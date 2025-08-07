import React, { useState, useEffect } from 'react';
import { authFirebase, dbFirebase } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import './Dashboard.css';

const Dashboard = () => {
    // 1. Creamos un estado para guardar el nombre del usuario.
    const [userName, setUserName] = useState("usuario");
    const [isLoading, setIsLoading] = useState(true);

    // 2. Usamos useEffect para cargar el nombre del usuario al montar el componente.
    useEffect(() => {
        const fetchUserName = async () => {
            const user = authFirebase.currentUser;
            if (user) {
                const userDocRef = doc(dbFirebase, "Users", user.uid);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {
                    // 3. Si el documento existe, actualizamos el estado con el nombre.
                    setUserName(userDocSnap.data().name);
                } else {
                    console.log("No se encontró el documento del usuario.");
                }
            }
            setIsLoading(false);
        };

        fetchUserName();
    }, []); // El array vacío asegura que se ejecute solo una vez.
    
    return (
        <section className="dashboard-section">
            <div className="dashboard-header">
                {/* 4. Renderizamos el nombre o un mensaje de carga. */}
                {isLoading ? (
                    <h2>Cargando...</h2>
                ) : (
                    <h2>¡Bienvenido de nuevo, {userName}!</h2>
                )}
                <p>Explora lo mejor de tu comunidad universitaria.</p>
            </div>
            
            <div className="dashboard-grid">
                <div className="dashboard-card events-card" data-aos="fade-up">
                    <h3 className="card-title">Eventos en tu U 🎉</h3>
                    <p>Descubre los próximos eventos en tu campus y únete a la diversión.</p>
                    <button className="dashboard-btn">Ver Eventos</button>
                </div>
                
                <div className="dashboard-card groups-card" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="card-title">Grupos y Comunidades 🤝</h3>
                    <p>Encuentra tu tribu. Únete a clubes y comunidades con tus mismos intereses.</p>
                    <button className="dashboard-btn">Explorar Grupos</button>
                </div>

                <div className="dashboard-card matches-card" data-aos="fade-up" data-aos-delay="400">
                    <h3 className="card-title">Tus Posibles Matches 💖</h3>
                    <p>Conecta con estudiantes que comparten tu Vibe y tus metas académicas.</p>
                    <button className="dashboard-btn">Ver Matches</button>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;