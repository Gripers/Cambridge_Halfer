import React from "react";
import { Route, Routes } from "react-router-dom";
import Headphone from "./blog-componenets/Headphone";
import HeadphoneUz from "./blog-componenets-uz/HeadphoneUz";
import Alone from "./blog-pages/Alone";
import AloneUz from "./blog-pages-uz/Alone";
import Cartoon from "./blog-pages/Cartoon";
import CartoonUz from "./blog-pages-uz/Cartoon";
import Effect from "./blog-pages/Effect";
import EffectUz from "./blog-pages-uz/Effect";
import Fear from "./blog-pages/Fear";
import FearUz from "./blog-pages-uz/Fear";
import Filmer from "./blog-pages/Filmer";
import FilmerUz from "./blog-pages-uz/Filmer";
import HeaderDivFirst from "./blog-pages/HeaderDivFirst";
import HeaderDivFourth from "./blog-pages/HeaderDivFourth";
import HeaderDivSecond from "./blog-pages/HeaderDivSecond";
import HeaderDivThird from "./blog-pages/HeaderDivThird";
import HeaderDivFirstUz from "./blog-pages-uz/HeaderDivFirst";
import HeaderDivFourthUz from "./blog-pages-uz/HeaderDivFourth";
import HeaderDivSecondUz from "./blog-pages-uz/HeaderDivSecond";
import HeaderDivThirdUz from "./blog-pages-uz/HeaderDivThird";
import Ielts from "./blog-pages/Ielts";
import IeltsUz from "./blog-pages-uz/Ielts";
import Joke from "./blog-pages/Joke";
import JokeUz from "./blog-pages-uz/Joke";
import Learn from "./blog-pages/Learn";
import LearnUz from "./blog-pages-uz/Learn";
import Listen from "./blog-pages/Listen";
import ListenUz from "./blog-pages-uz/Listen";
import Minikon from "./blog-pages/Minikon";
import MinikonUz from "./blog-pages-uz/Minikon";
import Offline from "./blog-pages/Offline";
import OfflineUz from "./blog-pages-uz/Offline";
import Orfograf from "./blog-pages/Orfograf";
import OrfografUz from "./blog-pages-uz/Orfograf";
import Pronunc from "./blog-pages/Pronunc";
import PronuncUz from "./blog-pages-uz/Pronunc";
import Sertificaty from "./blog-pages/Sertificaty";
import SertificatyUz from "./blog-pages-uz/Sertificaty";
import Training from "./blog-pages/Training";
import TrainingUz from "./blog-pages-uz/Training";
import Translate from "./blog-pages/Translate";
import TranslateUz from "./blog-pages-uz/Translate";
import Wishes from "./blog-pages/Wishes";
import WishesUz from "./blog-pages-uz/Wishes";
import Events from "./news-pages/Events";
import HomeUz from "./pages-uz/Home";
import TeamUz from "./pages-uz/Team";
import NewsUz from "./pages-uz/News";
import BlogUz from "./pages-uz/Blog";
import MoreUz from "./pages-uz/More";
import EventsUz from "./news-pages-uz/Events";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import More from "./pages/More";
import News from "./pages/News";
import Team from "./pages/Team";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/more" element={<More />} />
        <Route path="/events" element={<Events />} />
        <Route path="/headerdivfirst" element={<HeaderDivFirst />} />
        <Route path="/headerdivsecond" element={<HeaderDivSecond />} />
        <Route path="/headerdivthird" element={<HeaderDivThird />} />
        <Route path="/alone" element={<Alone />} />
        <Route path="/orfograf" element={<Orfograf />} />
        <Route path="/joke" element={<Joke />} />
        <Route path="/pronuncation" element={<HeaderDivFourth />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/offline" element={<Offline />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/pronunc" element={<Pronunc />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/minikon" element={<Minikon />} />
        <Route path="/cartoon" element={<Cartoon />} />
        <Route path="/filmer" element={<Filmer />} />
        <Route path="/fear" element={<Fear />} />
        <Route path="/listen" element={<Listen />} />
        <Route path="/headphone" element={<Headphone />} />
        <Route path="/ielts" element={<Ielts />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/training" element={<Training />} />
        <Route path="/sertificaty" element={<Sertificaty />} />
        <Route path="/homeuz" element={<HomeUz />} />
        <Route path="/teamuz" element={<TeamUz />} />
        <Route path="/newsuz" element={<NewsUz />} />
        <Route path="/bloguz" element={<BlogUz />} />
        <Route path="/moreuz" element={<MoreUz />} />
        <Route path="/eventsuz" element={<EventsUz />} />
        <Route path="/headerdivfirstuz" element={<HeaderDivFirstUz />} />
        <Route path="/headerdivseconduz" element={<HeaderDivSecondUz />} />
        <Route path="/headerdivthirduz" element={<HeaderDivThirdUz />} />
        <Route path="/aloneuz" element={<AloneUz />} />
        <Route path="/orfografuz" element={<OrfografUz />} />
        <Route path="/jokeuz" element={<JokeUz />} />
        <Route path="/pronuncationuz" element={<HeaderDivFourthUz />} />
        <Route path="/effectuz" element={<EffectUz />} />
        <Route path="/offlineuz" element={<OfflineUz />} />
        <Route path="/translateuz" element={<TranslateUz />} />
        <Route path="/wishesuz" element={<WishesUz />} />
        <Route path="/minikonuz" element={<MinikonUz />} />
        <Route path="/cartoonuz" element={<CartoonUz />} />
        <Route path="/filmeruz" element={<FilmerUz />} />
        <Route path="/listenuz" element={<ListenUz />} />
        <Route path="/headphoneuz" element={<HeadphoneUz />} />
        <Route path="/ieltsuz" element={<IeltsUz />} />
        <Route path="/learnuz" element={<LearnUz />} />
        <Route path="/traininguz" element={<TrainingUz />} />
        <Route path="/fearuz" element={<FearUz />} />
        <Route path="/pronuncuz" element={<PronuncUz />} />
        <Route path="/sertificatyuz" element={<SertificatyUz />} />
      </Routes>
    </div>
  );
}

export default App;
