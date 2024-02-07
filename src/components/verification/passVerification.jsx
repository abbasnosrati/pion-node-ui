function Pass({ passed }) {
  const notPass = Object.values(passed).every((element) => element === false);
  if (notPass) {
    return (
      <div>
        <b>You haven’t passed any of the verifications</b>
      </div>
    );
  } else {
    const verificationTitle = {
      telegramVerified: "Active Community Member (Telegram)",
      discordVerified: "Active Community Member (Discord)",
      presaleVerified: "Muon Presale Participation",
      brightidMeetsVerified: "BrightID Meet Verification",
      brightidAuraVerified: "BrightID Aura Verification",
      gitcoinPassportVerified: "Gitcoin Verification",
      privateSaleVerified: "Private Sale Verification",
      temporary2ndTierVerified: "Temporary 2nd Tier Verification",
    };

    return (
      <div className="mt-4">
        {Object.keys(passed).map((pass, i) => {
          if (passed[pass]) {
            return (
              <p key={i} className="text-[18px] font-medium mt-1">
                {verificationTitle[pass]}
              </p>
            );
          }
        })}
      </div>
    );
  }
}

export default function PassVerification(props) {
  const selector = props.passed;
  const pass = {
    presaleVerified: selector.presaleVerified,
    telegramVerified: selector.telegramVerified,
    discordVerified: selector.discordVerified,
    brightidAuraVerified: selector.brightidAuraVerified,
    brightidMeetsVerified: selector.brightidMeetsVerified,
    gitcoinPassportVerified: selector.gitcoinPassportVerified,
    privateSaleVerified: selector.privateSaleVerified,
    temporary2ndTierVerified: selector.temporary2ndTierVerified,
  };
  return (
    <div className="bg-cardBackground/50 w-full rounded-[10px] grid content-between py-4 px-8 h-full min-h-[148px]">
      <h4 className="text-[#BCC8DE]">Your verification pass</h4>
      <Pass passed={pass}></Pass>
    </div>
  );
}
