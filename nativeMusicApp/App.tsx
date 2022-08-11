import React, {useEffect} from 'react';
import useLogin from './core/spotify/spotify';
import Navigation from './src/navigation/Navigation';

const App = () => {
    const {authLogin} = useLogin();

    useEffect(() => {
        authLogin();
      console.log(123);
    }, []);

    return <Navigation />;
};

export default App;
