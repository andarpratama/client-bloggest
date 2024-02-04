import { createSlice } from "@reduxjs/toolkit";

const getInitialThemeMode = () => {
    if (typeof window !== "undefined") {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme || "light";
    }
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: getInitialThemeMode(),
    },
    reducers: {
        toogleTheme: (state) => {
            state.value = state.value === 'light' ? 'dark' : 'light'
            localStorage.setItem("theme", state.value);
        }
    }
})

export const {toogleTheme} = themeSlice.actions
export default themeSlice.reducer;