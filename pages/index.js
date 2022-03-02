import Head from "next/head";
import Script from "next/script"
import { dictionary_en } from "../public/Dictionary_official_en";
import { useState } from "react";

import DisplayImage from "../components/UI/DisplayImage";
import NewLetters from "../components/NewLetters/NewLetters";
import Matches from "../components/MatchingWord/Matches";
import DisplayInsertedLetters from "../components/MatchingWord/DisplayInsertedLetters";
import Description from "../components/Description/Description";

import CookieConsent from "react-cookie-consent";

let match = [];
let inserted_letters;
function HomePage() {
  const [new_match, setMatch] = useState(match);
  const addLetterHandler = (letters) => {
    inserted_letters = letters;
    match = [];
    let dictionary = dictionary_en;
    for (let item in dictionary) {
      let el = dictionary[item];
      if (el.length <= letters.length) {
        let newLetters = letters.toLowerCase();
        let sum = 0;
        for (let letter in newLetters) {
          if (el.includes(newLetters[letter])) {
            // el = aah leads to "aa", "aah", "ah", "ha", "aha"
            switch (newLetters[letter]) {
              case "a":
              case "e":
              case "i":
              case "o":
              case "u":
              case "l":
              case "n":
              case "s":
              case "t":
              case "r":
                sum += 1;
                break;
              case "d":
              case "g":
                sum += 2;
                break;
              case "b":
              case "c":
              case "m":
              case "p":
                sum += 3;
                break;
              case "f":
              case "h":
              case "v":
              case "w":
              case "y":
                sum += 4;
                break;
              case "k":
                sum += 5;
                break;
              case "j":
              case "x":
                sum += 8;
                break;
              case "q":
              case "z":
                sum += 10;
                break;
              default:
                console.log("Something went wrong!");
                break;
            }
            el = el.replace(newLetters[letter], "");
          }
        }
        if (el === "") {
          if (!match.length)
            match.push({
              word: dictionary[item],
              points: sum,
            });
          else {
            for (let index in match) {
              if (match[index].points <= sum) {
                match.splice(index, 0, { word: dictionary[item], points: sum });
                break;
              }
            }
          }
        }
      }
    }
    setMatch(match);
  };

  return (
    <>
    
      <Head>
        <title>
          ScrabbleFox | Word Finder | Scrabble Cheat | Search for Words
        </title>
        <meta
          name="description"
          content="Win every scrabble game with this free online cheat tool that helps to find the highest scoring word. Search and find words that match with your letters and get definitions for each word."
        />
        <link rel="apple-touch-icon" href="/fav.png"/>
        <link rel="icon" href="/fav.png"/>
      </Head>
      <DisplayImage />
      <NewLetters onAddLetters={addLetterHandler} />
      {inserted_letters && (
        <DisplayInsertedLetters letters={inserted_letters} />
      )}
      {new_match.length > 0 && <Matches items={new_match} />}
      {new_match.length === 0 && inserted_letters && (
        <Matches items={[{ word: "No matching word found", points: "-" }]} />
      )}
      {!inserted_letters && <Description />}
      <CookieConsent
        enableDeclineButton
        debug={true}
        style={{ background: "#1f1f1f", textAlign: "left" }}
        buttonStyle={{ color: "#000", background: "#fff", fontSize: "14px" }}
        declineButtonStyle={{
          color: "#1f1f1f",
          background: "#ffff",
          fontSize: "14px",
        }}
        expires={365}
      >
        This site uses cookies for Google Analytics and to enhance the user
        experience.
      </CookieConsent>
    </>
  );
}

export default HomePage;
