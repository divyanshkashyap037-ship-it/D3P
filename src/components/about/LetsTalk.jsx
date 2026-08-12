const LetsTalk = ({ phoneEmail = "divyanshkashyap037@gmail.com" }) => {
  const email = phoneEmail;
  return (
  <section className="relative flex w-full flex-row items-center justify-center overflow-clip bg-black">
    <div className="flex w-full max-w-[1500px] flex-row items-center justify-center gap-[10px] px-[20px] pt-[20px] pb-[5px] tab:pt-[60px]">
      <p
        className="m-0 text-[26.65px] text-white tab:text-[50px]"
        style={{ fontFamily: "var(--font-sans)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1, whiteSpace: "nowrap", textAlign: "left" }}
      >
        got a project in mind? let&apos;s talk{" "}
        <a href={`mailto:${email}`} className="cursor-pointer text-white underline transition-colors hover:text-[#fe3c01]">
          {email}
        </a>
      </p>
    </div>
  </section>
  );
};

export default LetsTalk;
