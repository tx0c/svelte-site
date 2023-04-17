<script context="module" lang="ts">
  export const prerender = true;

  export const load = async ({ fetch }) => {
    // Runs before the component is created
    const posts = await fetch("/posts.json");
    const allPosts = await posts.json();

    return {
      props: {
        posts: allPosts, // .concat(staticPosts),
      },
    };
  };
</script>

<script lang="ts">
  import { onMount } from "svelte";

  // import { getPosts } from './_posts';
  import { LINKS } from "$lib/consts";

  export let posts;

  onMount(() => {
    index.init();
  });
</script>

<svelte:head>
  <meta
    name="description"
    content="A Web3 social media ecosystem that lets users collaboratively create and monetize digital assets with complete control."
  />
  <meta property="og:title" content="Powering the Future of Web3" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/img/thumb.jpg" />
  <meta property="og:url" content="https://matters-lab.io/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    property="og:description"
    content="A Web3 social media ecosystem that lets users collaboratively create and monetize digital assets with complete control."
  />
  <meta property="og:site_name" content="Matters-Lab: Powering the Future of Web3" />
  <meta
    name="twitter:image:alt"
    content="A Web3 social media ecosystem that lets users collaboratively create and monetize digital assets with complete control."
  />
  <meta property="fb:app_id" content="" />
  <meta name="twitter:site" content="" />
  <title>Powering the Future of Web3</title>
</svelte:head>

<section class="intro d-flex align-items-center flex-column flex-md-row">
  <div class="ratio ratio-16x9 d-none d-md-block">
    <video class="embed-responsive-item" playsinline autoplay loop muted>
      <source type="video/mp4" />
    </video>
  </div>
  <div class="container">
    <header class="text-center">
      <h1 class="d-inline-block">Powering the Future of Web3</h1>
    </header>
    <article>
      <div class="row">
        <div class="col-12 col-md-6">
          <p>
            A Web3 social media ecosystem that lets users collaboratively create and monetize
            digital assets with complete control.
          </p>
        </div>
      </div>
    </article>
  </div>
  <div class="tips"><i class="icon d-block" /></div>
</section>

<section class="who_we_empower d-flex justify-content-center align-items-center">
  <div class="orbit orbit-1" />
  <div class="orbit orbit-2" />
  <div class="orbit orbit-3">
    <div class="planets">
      <div class="planet" />
    </div>
  </div>
  <div class="orbit orbit-4">
    <div class="planets">
      <div class="planet" />
    </div>
  </div>
  <div class="orbit orbit-5">
    <div class="planets">
      <div class="planet planet-1" />
      <div class="planet planet-2" />
      <div class="planet planet-3" />
    </div>
  </div>
  <div class="container">
    <header class="text-center">
      <h2 class="d-inline-block">Who We Empower</h2>
    </header>
    <hr />
    <article class="text-center">
      <div class="slider">
        <div class="slide slide-1">
          <div class="title">
            <h3>Creators</h3>
          </div>
          <div class="text">
            <p>
              Decentralized publishing, Ownership Verification, NFT-powered Subscriptions,
              Token-driven Community, DAO-based Governance
            </p>
          </div>
        </div>
        <div class="slide slide-2">
          <div class="title">
            <h3>Developers</h3>
          </div>
          <div class="text">
            <p>Open-source community, build Dapp, create the future</p>
          </div>
        </div>
        <div class="slide slide-3">
          <div class="title">
            <h3>Investors</h3>
          </div>
          <div class="text">
            <p>Be part of the Web3 innovation movement and reap rewards</p>
          </div>
        </div>
      </div>
      <div class="navigation d-flex align-items-center justify-content-center">
        <button class="nav nav-1" onClick="index.slide('1')" />
        <button class="nav nav-2" onClick="index.slide('2')" />
        <button class="nav nav-3" onClick="index.slide('3')" />
      </div>
    </article>
  </div>
</section>

<section class="our_partners_and_supporters">
  <div class="container">
    <header class="d-flex justify-content-between align-items-center flex-column flex-md-row">
      <h2 class="d-inline-block align-self-start align-self-md-center">
        Our Partners & Supporters
      </h2>
      <div class="buttons align-self-end align-self-md-center">
        <div class="d-flex flex-column">
          <a class="btn arrow" href="mailto:hi@matters.town" target="_blank"
            ><span>Contact Us</span><i class="icon" /></a
          ><a class="btn arrow" href="mailto:hi@matters.town" target="_blank"
            ><span>Contact Us</span><i class="icon" /></a
          >
        </div>
      </div>
    </header>
    <article class="d-flex flex-wrap justify-content-md-center">
      <a class="longling_capital ratio ratio-1x1" /><a class="protocol_labs ratio ratio-1x1" /><a
        class="mask ratio ratio-1x1"
      /><a class="crust ratio ratio-1x1" /><a class="likecoin ratio ratio-1x1" /><a
        class="snap_fingers ratio ratio-1x1"
      /><a class="incuba_alpha ratio ratio-1x1" /><a
        class="google_news_initiative ratio ratio-1x1"
      /><a class="grant_for_the_web ratio ratio-1x1" />
    </article>
  </div>
</section>

<section class="our_vision_and_mission d-flex align-items-center flex-column flex-md-row">
  <div class="ratio ratio-16x9 d-none d-md-block">
    <video class="embed-responsive-item" playsinline autoplay loop muted>
      <source type="video/mp4" />
    </video>
  </div>
  <div class="container">
    <header>
      <h2 class="d-inline-block">Our Vision and Mission</h2>
    </header>
    <article>
      <div class="row align-items-center">
        <div class="col-md-5">
          <div class="text">
            <p>
              Matters Lab was established in 2018, with the mission to create a freer and fairer
              creator ecosystem through the next evolution of the Internet, Web3.
            </p>
            <p>Let's create a more equal, decentralized, and trustless world together.</p>
          </div>
          <div class="buttons">
            <button class="btn outline" onclick="index.goto()"
              ><span>BE A PART OF THE MISSION</span></button
            >
          </div>
        </div>
      </div>
    </article>
  </div>
</section>

<section class="creator_economy_in_web3">
  <div class="container">
    <header>
      <h2 class="d-inline-block">Creator Economy in Web3</h2>
    </header>
    <article>
      <figure class="img"><img class="img-fluid" src="img/ceiw-visual.png" /></figure>
    </article>
  </div>
</section>

<section class="projects_spotlight">
  <div class="container">
    <header>
      <h2 class="d-inline-block">Projects Spotlight</h2>
    </header>
    <article>
      <div class="matters_news">
        <div class="row">
          <div class="col-12 col-md-6">
            <figure class="img"><img class="img-fluid" src="img/ps-matters_town.png" /></figure>
          </div>
          <div class="col-12 col-md-6">
            <div class="title">
              <h3>Matters.Town</h3>
            </div>
            <div class="text">
              <p>
                <strong
                  >The massively popular decentralized publishing platform that redefines the
                  creator economy</strong
                >
              </p>
              <p>
                Matters.Town is the community space where most users first enter Matterverse,
                providing an interface as familiar as Web2 applications but as powerful as Web3
                Dapp.
              </p>
              <p>
                To empower creators, the open-sourced platform is based on InterPlanetary File
                System (IPFS), a protocol and peer-to-peer network for storing and sharing data in a
                distributed file system.
              </p>
              <p>
                Today, Matters.Town is growing with more than 100,000 creators and 6 million monthly
                page views committed to user experience, quality content, and free speech.
              </p>
            </div>
            <div class="buttons text-end">
              <a class="btn outline" href="https://matters.town/" target="_blank"
                ><span>LEARN MORE</span></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="the_space">
        <div class="row">
          <div class="col-12 col-md-6">
            <figure class="img"><img class="img-fluid" src="img/ps-the_space.png" /></figure>
          </div>
          <div class="col-12 col-md-6">
            <div class="title">
              <h3>The Space</h3>
            </div>
            <div class="text">
              <p>
                The Space is an everlasting, Draw-to-Earn pixel canvas that brings together NFT, the
                Harberger Tax, and Universal Basic Income concepts in an open-source community. It
                is not only collaboratively created, but also collaboratively sustained, maintained
                and owned as an on-chain museum for Web3 society and culture. In the future, the
                administration of The Space will be transferred to SpaceDAO, a decentralized
                autonomous organization formed by all $SPACE token holders.
              </p>
            </div>
            <div class="buttons text-end">
              <a class="btn outline" href="https://thespace.game/" target="_blank"
                ><span>LEARN MORE</span></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="traveloggers">
        <div class="row">
          <div class="col-12 col-md-6">
            <figure class="img"><img class="img-fluid" src="img/ps-traveloggers.png" /></figure>
          </div>
          <div class="col-12 col-md-6">
            <div class="title">
              <h3>Logbook</h3>
            </div>
            <div class="text">
              <p>
                <a href="https://traveloggers.matters.town/" target="_blank">Traveloggers</a> is the
                first dynamic NFTs used as PFP and a collaboration protocol Logbook to write,
                transfer, and co-create on the Blockchain. Owners of 1,500 Traveloggers will have
                access to the most revolutionary experiments to explore the creator economy model in
                Matterverse, which include but not limited to airdrop benefits of NFT programs and
                governance tokens. Traveloggers project was a massive success with pre-order selling
                out within 10 minutes and now trading on
                <a href="https://opensea.io/collection/traveloggers" target="_blank">Open Sea</a>.
              </p>
            </div>
            <div class="buttons text-end">
              <a class="btn outline" href="https://logbook.matters.town/" target="_blank"
                ><span>LEARN MORE</span></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="on_site">
        <div class="row">
          <div class="col-12 col-md-6">
            <figure class="img"><img class="img-fluid" src="img/ps-fellowship.png" /></figure>
          </div>
          <div class="col-12 col-md-6">
            <div class="title">
              <h3>Frontline Fellowship</h3>
            </div>
            <div class="text">
              <p>
                Matters Lab’s publishing ecosystem surrounding creator economy include multiple
                grants that empower independent writers: Frontline Fellowship to support civil
                journalists worldwide, Million Matters Community Fund and Rocket Fund for community,
                Discord Matterverse Moderator Fund, all to incubate a CreatorDAO in near future.
              </p>
            </div>
            <div class="buttons text-end">
              <a class="btn outline" href={LINKS.frontlineFellowshipSite} target="_blank"
                ><span>LEARN MORE</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</section>

<section class="press_coverage">
  <div class="container">
    <header>
      <h2 class="d-inline-block">Press Coverage</h2>
    </header>
    <article>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a
              class="digest"
              href="https://restofworld.org/2020/chinas-fugitive-writers-find-a-home-online/"
              target="_blank"
            >
              <div>
                <div class="title">
                  <h3>Rest of World</h3>
                </div>
                <div class="text">
                  <p>
                    “Blockchain allows Matters users to collectively determine its rules, and to
                    decide what content has value...Matters is one of the few remaining online
                    venues where users from across the political spectrum can engage in discussion
                    and debate.”
                  </p>
                </div>
              </div>
              <div>
                <div class="buttons text-end">
                  <div class="btn arrow"><i class="icon" /></div>
                </div>
              </div></a
            >
          </div>
          <div class="swiper-slide">
            <a
              class="digest"
              href="https://www.protocol.com/nft-indepedent-chinese-language-media"
              target="_blank"
            >
              <div>
                <div class="title">
                  <h3>The Protocol</h3>
                </div>
                <div class="text">
                  <p>
                    "Matters give Chinese citizens a way to speak out that cannot be erased by
                    censors."
                  </p>
                </div>
              </div>
              <div>
                <div class="buttons text-end">
                  <div class="btn arrow"><i class="icon" /></div>
                </div>
              </div></a
            >
          </div>
          <div class="swiper-slide">
            <a
              class="digest"
              href="https://www.cjr.org/analysis/china-censorship.php"
              target="_blank"
            >
              <div>
                <div class="title">
                  <h3>Columbia Journalism Review</h3>
                </div>
                <div class="text">
                  <p>
                    “The [Chinese-language media’s] attempts to adopt new technology to weather
                    financial and political turbulence can inspire the West...allowing Matters users
                    to trade NFT avatars empower users to independently open censorship-resilient
                    sites, turning their work into a part of the Ethereum blockchain as a public
                    ledger and selling it.”
                  </p>
                </div>
              </div>
              <div>
                <div class="buttons text-end">
                  <div class="btn arrow"><i class="icon" /></div>
                </div>
              </div></a
            >
          </div>
          <div class="swiper-slide">
            <a
              class="digest"
              href="https://www.sixthtone.com/news/1002403/how-blockchain-could-revolutionize-chinas-media"
              target="_blank"
            >
              <div>
                <div class="title">
                  <h3>Sixth Tone</h3>
                </div>
                <div class="text">
                  <p>
                    “Blockchain could revolutionize revenue for news publications, which once relied
                    heavily on advertising. Zhang’s blockchain-backed business model will generate
                    more revenue than the existing subscription method. Readers can pay for the
                    articles that they like reading, rather than pay for a blanket monthly or yearly
                    subscription. ”
                  </p>
                </div>
              </div>
              <div>
                <div class="buttons text-end">
                  <div class="btn arrow"><i class="icon" /></div>
                </div>
              </div></a
            >
          </div>
          <div class="swiper-slide">
            <a class="digest" href="https://www.openbook.org.tw/article/p-66088" target="_blank">
              <div>
                <div class="title">
                  <h3>Openbook</h3>
                </div>
                <div class="text">
                  <p>
                    「NFT是資本主義對自己的修正，是防止它極右化的一個修復，它就是一個巨大的社會實驗，它讓文化商品有可能得到長期價值，且在短期也能套現。張潔平期待所有對現階段的網路環境有所不滿的人都能早一點走到Web3，去做一個行動者。」
                  </p>
                </div>
              </div>
              <div>
                <div class="buttons text-end">
                  <div class="btn arrow"><i class="icon" /></div>
                </div>
              </div></a
            >
          </div>
          <div class="swiper-slide">
            <a
              class="digest"
              href="https://www.inside.com.tw/feature/nft/25869-matters-web3-nft"
              target="_blank"
            >
              <div>
                <div class="title">
                  <h3>Inside</h3>
                </div>
                <div class="text">
                  <p>
                    「NFT 對創作者而言是一種徹底改寫規則的發行方式，不是任何發 NFT
                    的計畫都能賺到快錢，但對真正有價值的內容而言，NFT 可以透過智能合約，在這 20
                    年持續獲得分潤的工具，內容可以被『整存零取』。」
                  </p>
                </div>
              </div>
              <div>
                <div class="buttons text-end">
                  <div class="btn arrow"><i class="icon" /></div>
                </div>
              </div></a
            >
          </div>
          <div class="swiper-slide">
            <a
              class="digest"
              href="https://www.dw.com/zh/区块链让好新闻更安全更值钱/a-44329162?&zhongwen=trad"
              target="_blank"
            >
              <div>
                <div class="title">
                  <h3>德國之聲</h3>
                </div>
                <div class="text">
                  <p>
                    「Matters试图使用区块链的底层技术建立一个构架在合理的评价模型之上的内容交易体系这一体系最终是为了摆脱由广告利益驱动的中心化算法，使内容创作者可以获得直接回报。」
                  </p>
                </div>
              </div>
              <div>
                <div class="buttons text-end">
                  <div class="btn arrow"><i class="icon" /></div>
                </div>
              </div></a
            >
          </div>
        </div>
      </div>
    </article>
  </div>
</section>

<section class="behind-matters-news">
  <div class="container">
    <header class="d-flex justify-content-between align-items-center flex-column flex-md-row">
      <h2 class="d-inline-block align-self-start align-self-md-center">Behind Matters Lab</h2>
      <div class="buttons align-self-end align-self-md-center">
        <div class="d-flex flex-column">
          <a class="btn arrow" href={LINKS.joinus} target="_blank"
            ><span>JOIN US</span><i class="icon" /></a
          ><a class="btn arrow" href={LINKS.joinus} target="_blank"
            ><span>JOIN US</span><i class="icon" /></a
          >
        </div>
      </div>
    </header>
    <article>
      <div class="row">
        <div class="col-6 col-md-3">
          <div class="member">
            <figure class="frame"><img class="img-fluid" src="img/bmn-jieping_zhang.png" /></figure>
            <span class="title">Founder, CEO</span><span class="name">Jieping Zhang</span>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="member">
            <figure class="frame"><img class="img-fluid" src="img/bmn-guo_liu.png" /></figure>
            <span class="title">Co-founder, CTO</span><span class="name">Guo Liu</span>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="member">
            <figure class="frame"><img class="img-fluid" src="img/bmn-beryl_liu.png" /></figure>
            <span class="title">Co-founder, Operation</span><span class="name">Beryl Liu</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 col-md-2">
          <div class="member">
            <figure class="frame"><img class="img-fluid" src="img/bmn-zeck_li.png" /></figure>
            <span class="title">Product Manager</span><span class="name">Zeck Li</span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="member">
            <figure class="frame"><img class="img-fluid" src="img/bmn-yihan_huang.png" /></figure>
            <span class="title">UI/UX Designer</span><span class="name">Yihan Huang</span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="member">
            <figure class="frame"><img class="img-fluid" src="img/bmn-robert_lu.png" /></figure>
            <span class="title">Product Engineer</span><span class="name">Robert Lu</span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="member">
            <figure class="frame"><img class="img-fluid" src="img/bmn-tomas_cheng.png" /></figure>
            <span class="title">Sr. Software Engineer</span><span class="name">Tomas Cheng</span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="member">
            <figure class="frame"><img class="img-fluid" src="img/bmn-charlie.png" /></figure>
            <span class="title">Developer (PT)</span><span class="name">Charlie</span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="member">
            <figure class="frame"><img class="img-fluid" src="img/bmn-elk_leung.png" /></figure>
            <span class="title">Front-end Engineer </span><span class="name">Elk Leung</span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="member">
            <figure class="frame"><img class="img-fluid" src="img/bmn-lee.png" /></figure>
            <span class="title">Community Head</span><span class="name">Lee</span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="member">
            <figure class="frame"><img class="img-fluid" src="img/bmn-yingshin_lee.png" /></figure>
            <span class="title">Community</span><span class="name">Yingshin Lee</span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="member">
            <figure class="frame"><img class="img-fluid" src="img/bmn-dobby_will.png" /></figure>
            <span class="title">Community</span><span class="name">Dobby Will</span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="member">
            <figure class="frame"><img class="img-fluid" src="img/bmn-xy.png" /></figure>
            <span class="title">Event</span><span class="name">XY</span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="member">
            <figure class="frame"><img class="img-fluid" src="img/bmn-xinan_he.png" /></figure>
            <span class="title">Event</span><span class="name">Xinan He</span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="member">
            <figure class="frame">
              <img class="img-fluid" src="img/bmn-yu_hsuan_chang.png" />
            </figure>
            <span class="title">Content Operations</span><span class="name">Yu-Hsuan Chang</span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="member">
            <figure class="frame"><img class="img-fluid" src="img/bmn-emilie.png" /></figure>
            <span class="title">Brand & Operations</span><span class="name">Emilie</span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="member">
            <figure class="frame"><img class="img-fluid" src="img/bmn-xia.png" /></figure>
            <span class="title">Data Scientist</span><span class="name">Xia</span>
          </div>
        </div>
      </div>
    </article>
  </div>
</section>

<section class="follow_us" id="follow_us">
  <div class="container">
    <div class="content">
      <header class="text-center">
        <h2 class="d-inline-block">JOIN US</h2>
      </header>
      <article class="text-center">
        <div class="text">
          <p>Get the latest news about our progress and Web 3.</p>
        </div>
        <div id="mc_embed_signup">
          <form
            class="validate"
            id="mc-embedded-subscribe-form"
            action="https://news.us20.list-manage.com/subscribe/post?u=2b73e9a364e173e88fe6a624f&amp;id=61bc380ea9"
            method="post"
            name="mc-embedded-subscribe-form"
            target="_blank"
            novalidate=""
          >
            <div id="mc_embed_signup_scroll">
              <div class="mc-field-group">
                <input
                  class="required email"
                  id="mce-EMAIL"
                  type="email"
                  value=""
                  name="EMAIL"
                  placeholder="Your e-mail"
                />
                <div class="outline" />
              </div>
              <div class="clear foot" id="mce-responses">
                <div class="response" id="mce-error-response" style="display:none" />
                <div class="response" id="mce-success-response" style="display:none" />
              </div>
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input
                  type="text"
                  name="b_2b73e9a364e173e88fe6a624f_61bc380ea9"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="optionalParent">
                <div class="clear foot">
                  <input
                    class="button"
                    id="mc-embedded-subscribe"
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <script
          type="text/javascript"
          src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
        <script type="text/javascript">
          (function ($) {
            window.fnames = ["EMAIL", "FNAME", "LNAME", "ADDRESS", "PHONE", "BIRTHDAY"];
            window.ftypes = ["email", "text", "text", "address", "phone", "birthday"];
          })(jQuery);
          var $mcj = jQuery.noConflict(true);
        </script>

        <div class="buttons">
          <a class="btn social matters" href="https://matters.town/" target="_blank"
            ><i class="icon" /></a
          ><a class="btn social twitter" href="https://twitter.com/Mattersw3b" target="_blank"
            ><i class="icon" /></a
          ><a
            class="btn social discord"
            href="https://discord.com/invite/matterslab"
            target="_blank"><i class="icon" /></a
          ><a
            class="btn social linkedin"
            href="https://www.linkedin.com/company/matters-lab/"
            target="_blank"><i class="icon" /></a
          >
        </div>
      </article>
    </div>
  </div>
</section>

<section class="our_latest_blogs">
  <div class="container">
    <header class="d-flex justify-content-between align-items-center flex-column flex-md-row">
      <h2 class="d-inline-block align-self-start align-self-md-center">Our Latest Blogs:</h2>
      <div class="buttons align-self-end align-self-md-center">
        <div class="d-flex flex-column">
          <a class="btn arrow" href="/blog"><span>Read More</span><i class="icon" /></a><a
            class="btn arrow"
            href="/blog"><span>Read More</span><i class="icon" /></a
          >
        </div>
      </div>
    </header>
    <article>
      <div class="row">
        {#each posts.slice(0, 2) as post, i}
          <div class="col-12 col-md-6">
            <a class="btn" href={post.path || post.link} target={post.path ? null : "_blank"}>
              <div class="digest">
                <div>
                  <div class="title">
                    <h3>{post.title}</h3>
                  </div>
                  <div class="text">
                    <p>Author: {post.author}</p>
                    <p style="white-space: pre-wrap;">{post.summary}</p>
                  </div>
                </div>
              </div></a
            >
          </div>
        {/each}
      </div>
    </article>
  </div>
</section>

<style>
  section {
    margin-bottom: 340px;
  }

  @media (max-width: 768px) {
    section {
      margin-bottom: 142px;

      padding: 0 16px;
    }

    .intro {
      margin-top: 64px;
    }
  }

  .our_partners_and_supporters {
    margin-top: 400px;
  }
</style>
