import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
    const WithAuthComponent = (props) => {
        const navigate = useNavigate();
        const [isClient, setIsClient] = useState(false);

        useEffect(() => {
            setIsClient(true);

            if (typeof window !== 'undefined') {
                const isAuthenticated = localStorage.getItem('userToken');
                if (!isAuthenticated) {
                    navigate('/login');
                }
            }
        }, [navigate]);

        if (!isClient) {
            // Render nothing or a loading state until the client script runs
            return null; // or <Loading /> if you have a loading component
        }

        return <WrappedComponent {...props} />;
    };

    WithAuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return WithAuthComponent;
};

export default withAuth;
