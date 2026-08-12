const IndexFooter = ({ withCta = true }) => (
  <footer id="indexfooter" className="relative flex min-h-[100vh] w-full flex-col items-center overflow-clip bg-black">
    {withCta && (
      <div className="relative flex w-full max-w-[1480px] flex-col items-center justify-center gap-0 px-5 pt-[100px] pb-[5px]">
        <p
          className="text-center text-white"
          style={{ fontFamily: "var(--font-sans)", fontSize: 50, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: "1em", margin: 0 }}
        >
          got a project in mind? let&rsquo;s talk{" "}
          <a
            href="mailto:divyanshkashyap037@gmail.com"
            target="_blank"
            rel="noopener"
            className="cursor-pointer text-white underline"
          >
            divyanshkashyap037@gmail.com
          </a>
        </p>
      </div>
    )}
    <div className="relative flex flex-1 flex-col items-center justify-center gap-2.5 px-6 py-[100px]">
      <div className="relative w-full" style={{ mixBlendMode: "difference" }}>
        <p
          className="text-center text-[90px] leading-[80px] text-white tab:text-[120px] tab:leading-[110px] desk:text-[200px] desk:leading-[180px]"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 900, margin: 0, whiteSpace: "pre", letterSpacing: 0 }}
        >
          dy*
        </p>
        <p
          className="text-center text-[90px] leading-[80px] text-white tab:text-[120px] tab:leading-[110px] desk:text-[200px] desk:leading-[180px]"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 900, margin: 0, whiteSpace: "pre", letterSpacing: 0 }}
        >
          /26
        </p>
      </div>
    </div>
  </footer>
);

export default IndexFooter;
