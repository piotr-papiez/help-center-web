// Types
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tytuł artykułu",
  description: "Opis artykułu"
};

export default function Article() {
  return (
    <>
      <h1>
        Temu — Konfiguracja integracji
      </h1>
      <p id="fTYh8wj">Integracja <b>Sellasist ↔ Media Expert</b> to rozwiązanie, które pozwala sprawnie pobierać zamówienia, synchronizować ceny i stany magazynowe, a także importować oferty i łączyć je z asortymentem w Sellasist. Co więcej, wszystkie oferty wystawisz bezpośrednio z panelu Sellasist, z możliwością pełnej automatyzacji procesu.</p>
      <h2 id="kO57OOB">Nowy moduł integracji</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Lq7gGEBOEWw?si=G5MRpg6jicKI33P0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <p id="HkokRPw">Nowy moduł integracji <b>upraszcza i przyspiesza</b> podłączanie sklepów oraz marketplace’ów, dzięki czemu zarządzanie produktami, zamówieniami i logistyką staje się prostsze, a całość działa <b>płynniej i bardziej efektywnie</b>.</p>
      <p id="uVPdMK0">W przeciwieństwie do starych integracji, gdzie dane o produktach były pobierane na bieżąco, <b>obsługa produktów w nowym modelu działa na zasadzie importów "na żądanie"</b>. Nowe podejście zapewnia <b>większą kontrolę, mniejsze ryzyko przeciążenia systemu i lepszą wydajność</b>.</p>
      <p id="lcQ4OAb">Celem tej zmiany jest <b>centralizacja i automatyzacja</b> procesów sprzedaży oraz zarządzania magazynem. Sellasist staje się centrum, w którym zbierane są wszystkie kluczowe dane — od cen i stanów magazynowych po szczegóły zamówień — a następnie przekazywane dalej do innych systemów. Całość możesz wygodnie kontrolować z poziomu panelu administracyjnego, a wszelkie działania zobaczysz w logach integracji.</p>
      <a className='image-link' href='https://pub-df39f3ec6f554894beaea48b350cee4a.r2.dev/editor/505155516_1230714635180071_7509102996480260885_n.jpg-a9dcf05e-a203-44eb-bec3-4b6b776daca9'><img src='https://pub-df39f3ec6f554894beaea48b350cee4a.r2.dev/editor/505155516_1230714635180071_7509102996480260885_n.jpg-a9dcf05e-a203-44eb-bec3-4b6b776daca9' alt='Zrzut ekranu' /></a>
      <p id="9PEPdBa">Wszystkie nowe integracje będą oparte na nowym modelu.</p>
      <div id="549ClsP" className="release_alert"><b><span style={{ color: "#cc0000" }}>Uwaga:</span></b> Aktywne oferty wliczają się do abonamentu. Sprawdź listę ofert, aby uniknąć naliczenia dodatkowych opłat.</div>
      <h2 id="kalE7T9">Konfiguracja</h2>
      <h3 id="3Y2mcs1">Krok 1: Klucz API</h3>
      <p id="YUVnhX5">Pobierz klucz API ze swojego konta na Media Expert i zapisz go w bezpiecznym miejscu na czas konfiguracji.</p>
      <h3 id="AwCkkBn">Krok 2: Podłączanie konta</h3>
      <p id="qJ4OMCB">1. Przejdź do <b>Integracje → Dodaj nową integrację</b> i w sekcji <b>Marketplace</b> wybierz <b>Media Expert</b>.</p>
      <a className="image-link" href="http://crm.esprzedaz.com/Editor/assets/Pomoc/2025-09-23_08h01_56.png"><img id="yIsrAJn" src="http://crm.esprzedaz.com/Editor/assets/Pomoc/2025-09-23_08h01_56.png" alt="Zrzut ekranu" /></a>
    </>
  );
}