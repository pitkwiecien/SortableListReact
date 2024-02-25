import './App.css';
import Table from "../Table/Table";

function App() {
    const headers = [
        'Nazwa konkursu',
        'Zasięg',
        'Opiekun / adres mailowy',
        'Przyblizony termin',
        'Opis',
        'Link konkursu'
    ];

    const values = [
        ['Olimpiada Literatury i Języka', 'Polski ogólnopolski', 'Marta Osińska, marta osińska@tm1.edu.pl', 'listopad - etap szkolny', 'Trzystopniowa Olimpiada przeznaczona jest dla uczniów szkół średnich.', 'www.olijp.pl'],
        ['XXVIII OKWB  2023/24', 'ogólnopolski', 'Barbara Całka, barbara.calka@tm1.edu.pl', 'etap szkolny marzec  2024, etap diecezjalny kwiecień, finał czerwiec', 'Ogólnopolski konkurs wiedzy biblijnej', 'http://okwb.pl/'],
        ['Olimpiada Wiedzy o Filmie i Komunikacji Społecznej', 'ogólnopolski', 'Beata Walczak, beata.walczak@tm1.edu.pl', 'listopad, styczeń', 'Ogólnopolska olimpiada z zakresu teorii i historii filmu, historii mediów, własna twórczość filmowa', 'https://fina.gov.pl/projekty/olimpiadawiedzy-o-filmie/'],
        ['XX Mazowiecki Konkurs Recytatorski', 'Jednego Poety', 'Beata Walczak, beata.walczak@tm1.edu.pl', 'listopad', 'Małgorzata Hillar – twórczość poetycka', 'https://kolorowa.arsus.pl/konkursy/xxmazowiecki-przeglad-recytatorskijednegopoety/?preview_id=18830&preview_nonce=f06c477701&preview=true&_thumbnail_id=18870'],
        ['Warszawski Konkurs Filmowy', 'warszawski', 'Beata Walczak, beata.walczak@tm1.edu.pl', 'listopad', '', 'http://www.mff.mazovia.pl/konkurs/'],
        ['Zajączkowy Konkurs Recytatorski', 'warszawski', 'Beata Walczak, beata.walczak@tm1.edu.pl', 'listopad', 'Konkurs recytatorski przeznaczony tylko dla uczniów technikum', 'https://zseil.edu.pl/aktualnosci/archiwum.php?rok_szkolny=2020/2021&id=826'],
        ['Szkolny Konkurs Jednego Wiersza', 'szkolny', 'Marta Osińska, marta osińska@tm1.edu.pl', 'październik', 'Twórczość własna uczniów', ''],
        ['Szkolny Konkurs na Opowiadanie', 'szkolny', 'Marta Osińska, marta osińska@tm1.edu.pl', 'styczeń', 'Twórczość własna uczniów', ''],
        ['Konkurs wiedzy o patronie liceum i technikum', 'szkolny', 'Monika Romankiewicz-Pawełek, monika.romankiewicz-pawełek@tm1.edu.pl', 'listopad', 'QUIZ online', ''],
        ['Konkurs na reportaż', 'szkolny', 'Monika Romankiewicz-Pawełek, monika.romankiewicz-pawełek@tm1.edu.pl', 'styczeń', '', '']
    ];

    return (
      <div className={"App"}>
        <Table headers={headers} values={values} colours={["lightgray", "lightblue", "lightgreen"]} cycleColours={4}/>
      </div>
    );
}

export default App;
