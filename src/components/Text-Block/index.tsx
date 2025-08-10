import React from "react";

interface TextBlockProps {
  Title: string;
  Content: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ Title, Content }) => {
  return (
    <section className="my-12">
      <div className="flex flex-col items-center">
        <h1 className="font-black font-['Salford_Sans'] text-[35px] text-center lg:text-[60px] text-center uppercase lg:leading-[50px] leading-[30px] lg:mb-8 lg:mt-12 mt-8">
          {Title}
        </h1>
        <div className="container-small">
          <div className="padding-vertical padding-top-medium">
            <div className="margin-bottom margin-xxlarge">
              {Title === "PRIVATE HIRE" && (
                <a
                  href="/private-hire#dmn-partner-widget"
                  className="enquiry-tag"
                >
                  ENQUIRE NOW
                </a>
              )}
              <div
                suppressHydrationWarning
                className="font-['Roc_Grotesk'] text-[16px] leading-[22px] min-[1400px]:text-[22px] min-[1400px]:leading-[27px] mx-auto text-center lg:mb-12 md:mb-0 w-[80%] mt-8 lg:mt-0 bg-secondary font-semibold"
                dangerouslySetInnerHTML={{
                  __html:
                    Title !== "CURLING"
                      ? Content
                      : '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 10px; width: 100%;">  <div class="raw-html-embed" style="display:flex; justify-content: center;">                    <link rel="stylesheet" type="text/css" href="https://onsass.designmynight.com/?background-color=%23d2451e&amp;primary-color=%236DA8A6&amp;body-text-color=%23000000&amp;outer-border-color=gray"><script src="//widgets.designmynight.com/bookings-partner.min.js" dmn-booking-form="true" venue="5ef4accad4ea515dbc2e723b" hide-offers="false" hide-powered-by="false" search-venues="false" monday-first="true" locale="undefined" allowed-types="66ed6cf886677e6ff27983f8" linked-bookings="true"></script>\n          </div>     <p style="text-align:center;">&nbsp;Something we have always been keen to address at Big Penny Social is the lack of first-class winter sports provision. We’ve heard you, and we are thrilled to announce our inaugural season of winter curling!<br><br>Like us, you’ve probably been weirdly mesmerised by the elegant arc of a curling stone whilst watching the Winter Olympics. Well now it’s your turn to dial up your inner-Muirhead and shine.<br><br>Join us from Friday the 22nd of November in our heated curling emporium (marquee), as we celebrate the best of the Christmas spirit by getting incredibly unnecessarily competitive after one too many mulled wines or boozy hot chocolates (available at the bar, obviously).<br><br>This is ice-free curling, you need no previous experience whatsoever, and you can even bring your kids.&nbsp;</p>    </div>         <p style="text-align:center;">&nbsp;</p><p style="text-align:center;"><strong>&nbsp;HOW TO PLAY CURLING?</strong></p><p>Find out everything you need to know about curling <a href=" /how-to-play-curling"><span style="color:rgb(255,83,60);"><strong>here</strong></span></a>!</p>',
                }}
              />
            </div>
            {Title === "PRIVATE HIRE" && (
              <div>
                <style>
                  {`
                                        #dmn-partner-widget {
                                            margin: 0 auto;
                                        }
                                    `}
                </style>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="page-divider"></div>
    </section>
  );
};

export default TextBlock;
