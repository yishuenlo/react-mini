import React from "react";

const Output = ({ name }) => {
  const descriptions = () => {
    const characters = "The sickly, predictable, attractive pedlar. The healthy bandit. The priestess from a small family. The social inventor needing a friend. The crippled explorer. The disorganized bandit. The tough acrobat with a dark past. The craven, gentle soldier. The unhealthy heir. The slothful inventor with a chemical dependency. The striking, miserable hero. The tactless assistant. The unhealthy traveler who is estranged from family members.The tolerant gambler trapped by the past. The seasoned, selfish traitor searching for truth. The social musician searching for a lost friend. The boastful spy. The shiftless, antisocial businessperson. The pragmatic farmer on the wrong side of the law. The enduring, melancholy, broken-hearted philanthropist with a large fortune. The unathletic poet who is an outsider. The unfriendly hermit looking for love. The educated, open-minded cleric who is seeking meaning in life. The agile, fearful, vicious prostitute. The actor with a heart of gold. The rogue searching for a family member. The singer searching for a family member. The agile champion with an unexpected destiny. The smuggler who can't resist helping people. The innocent prostitute who lost meaning in life. The unathletic, unheroic prospector who is prone to odd statements. The nimble, willful, cute philosopher. The tough, wild, ignored philosopher. The awkward politician. The clumsy musician with no hope. The tough, secretive, biased pharmacist. The uncreative, hateful gigolo with a heart of gold. The plain, innocent student. The crippled jailer. The striking farmer with unusual luck. The eccentric philanthropist who loves children. The watchful ambassador. The cooperative inventor who belongs to a secret organization. The unhealthy leader on the wrong side of the law. The crippled musician. The clumsy, tired, eccentric champion who suffers from a chronic medical condition. The tireless, open-minded assassin. The crippled, manipulative thief. The unethical comic.".split(
      ". "
    );

    return characters[Math.floor(Math.random() * characters.length)];
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>{name ? descriptions() : "Please input a name"}</p>
    </div>
  );
};

export default Output;
