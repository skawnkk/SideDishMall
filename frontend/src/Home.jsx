import MainMenu from './components/mainmenu/MainMenu';
import Category from './components/category/Category';
import Header from './components/header/Header';
import GlobalStyle from './GlobalStyle'

function Home() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<MainMenu />
			<Category />
		</>
	);
}

export default Home;
