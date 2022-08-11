import {authorize} from 'react-native-app-auth';
import SpotifyWebApi from 'spotify-web-api-node';
import {getDataStorage, setDataStorage} from '../../src/utils/storage';
import {Platform} from "react-native";

const scopes = [
    'user-read-email',
    'playlist-read-private',
    'playlist-read-collaborative',
    'streaming',
    'user-read-private',
    'user-library-read',
    'user-top-read',
    // "user-library-modify",
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-follow-read',
];

const authConfig = {
    clientId: 'b6f89b2da55d44e9905b44c609bca937',
    clientSecret: '93f754481a7749df96d5f76237291f90',
    redirectUrl:
        Platform.OS === 'ios'
            ? 'msauth.org.reactjs.native.example.Example://auth/'
            : 'app://deeplink',
    scopes,
    serviceConfiguration: {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://accounts.spotify.com/api/token',
    },
};

export const spotifyApi = new SpotifyWebApi({
    clientId: 'b6f89b2da55d44e9905b44c609bca937',
    clientSecret: '93f754481a7749df96d5f76237291f9',
});

export default function useLogin() {
    const authLogin = async () => {
        try {
            // const token = await getDataStorage(
            //     'accessToken',
            //     (accessToken: string) => spotifyApi.setAccessToken(accessToken),
            // );
            // console.info('tokentoken', token);
            // if (token) {
            //     return;
            // }
            const result = await authorize(authConfig);
            console.info(Platform.OS, result.accessToken);
            if (result.accessToken) {
                await setDataStorage(result.accessToken);
                spotifyApi.setAccessToken(result.accessToken);
            }
            // spotifyApi.getMyCurrentPlayingTrack().then(data => {
            //   console.log('Now playing1: ', data.body?.item);
            // })
        } catch (e) {
            console.log(e);
        }
    };

    return {
        authLogin,
    };
}
