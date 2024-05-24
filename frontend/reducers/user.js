import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        username: null,
        email: null,
        firstName: null,
        lastName: null,
        address: {
            street: null,
            city: null,
            zipCode: null,
        },
        phoneNumber: null,
        birthDate: null,
        artist: {
            artistName: null,
            member: 0,
            placeOrigin: null,
            genres: [],
        },
        host: {
            description: null,
            favoritesGenres: [],
        },
        isArtist: false,
        isHost: false,
        medias: [],
        token: null
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUsername: (state, action) => {
            state.value.username = action.payload;
        },
        updateEmail: (state, action) => {
            state.value.email = action.payload;
        },
        updateFirstName: (state, action) => {
            state.value.firstName = action.payload;
        },
        updateLastName: (state, action) => {
            state.value.lastName = action.payload;
        },
        updateAddress: (state, action) => {
            state.value.address = action.payload;
        },
        updatePhoneNumber: (state, action) => {
            state.value.phoneNumber = action.payload;
        },
        getArtistInfos: (state, action) => {
            state.value.artist = action.payload
            console.log('hello')
        },
        getHostInfos: (state, action) => {
            state.value.host = action.payload

        },
        updateBirthDate: (state, action) => {
            state.value.birthDate = action.payload;
        },
        updateToken: (state, action) => {
            state.value.token = action.payload;
        },
        updateArtist: (state, action) => {
            state.value.isArtist = action.payload;
        },
        updateHost: (state, action) => {
            state.value.isHost = action.payload;
        },
        addMedia: (state, action) => {
            state.value.medias.push(action.payload);
        },
        removeMedia: (state, action) => {
            state.value.medias = state.value.medias.filter(e => e !== action.payload);
        },
    },
});

export const { updateUsername,
    updateEmail,
    updateFirstName,
    updateLastName,
    updateBirthDate,
    updateAddress,
    updateToken,
    updateArtist,
    updateHost,
    updatePhoneNumber,
    addMedia,
    removeMedia,
    getArtistInfos,
    getHostInfos
} = userSlice.actions;
export default userSlice.reducer;