declare global {}

interface ViewState {
    showNavBar: boolean;
    inAction: boolean;
    tab: 'home' | 'repports' | 'trans' | 'me' | 'add',
    showArrowBack: boolean;
}