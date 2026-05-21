"use client";

import React from "react";
import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dumbbell,
  HeartPulse,
  Leaf,
  MessageCircle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type FeatureCardProps = {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  text: string;
};

type StepProps = {
  number: string;
  title: string;
  text: string;
};

type PriceCardProps = {
  title: string;
  price: string;
  description: string;
  items: string[];
  highlighted?: boolean;
};

export default function LifskrafturLandingPage() {
  return (
    <main
      className={`${body.className} min-h-screen bg-[var(--background)] text-[var(--foreground)]`}
    >
      <header className="sticky top-0 z-50 px-6 py-4 md:px-12 lg:px-20">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[var(--border-gold)] bg-[var(--background)]/85 px-5 py-4 shadow-sm backdrop-blur-xl">
          <a href="#heim" className="transition hover:opacity-80">
            <div>
              <div
                className={`${display.className} text-2xl font-semibold tracking-tight`}
              >
                Lífskraftur
              </div>
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--sand)]">
                Heilsu- og lífsstílsþjálfun
              </div>
            </div>
          </a>

          <div className="hidden gap-8 text-sm font-medium text-[var(--foreground)]/70 md:flex">
            <a href="#heim" className="transition hover:text-[var(--gold)]">
              Heim
            </a>
            <a
              href="#thjonusta"
              className="transition hover:text-[var(--gold)]"
            >
              Þjónusta
            </a>
            <a href="#ferlid" className="transition hover:text-[var(--gold)]">
              Ferlið
            </a>
            <a href="#verd" className="transition hover:text-[var(--gold)]">
              Verð
            </a>
          </div>

          <Button
            className="rounded-full bg-[var(--black)] px-6 text-[var(--white)] shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[var(--gold)] hover:text-[var(--white)] hover:shadow-2xl"
            asChild
          >
            <a href="https://forms.gle/oLvRj2G36zMtDkBg6" target="_blank">
              Bóka fund
            </a>
          </Button>
        </nav>
      </header>

      <section
        id="heim"
        className="relative overflow-hidden px-6 pt-12 pb-20 md:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 inline-flex rounded-full border border-[var(--border-gold-strong)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--sand)] shadow-sm">
              Hraustur líkami. Skýr hugur. Einföld rútína.
            </p>

            <h1
              className={`${display.className} text-6xl font-semibold leading-[0.95] tracking-tight md:text-7xl`}
            >
              Byggðu styrk, ró og sjálfsvirðingu.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--foreground)]/70">
              Lífskraftur hjálpar mönnum að byggja upp hraustan líkama, rólegra
              taugakerfi og sjálfstraust með einföldu kerfi í þjálfun, næringu
              og lífsstíl.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="rounded-full bg-[var(--black)] px-8 py-6 text-base text-[var(--white)] shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[var(--gold)] hover:text-[var(--white)] hover:shadow-2xl"
                asChild
              >
                <a href="#samtal">Sækja um þjálfun</a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-[var(--border-gold-strong)] bg-white px-8 py-6 text-base text-[var(--foreground)] shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--white)] hover:shadow-xl"
                asChild
              >
                <a href="#thjonusta">Sjá þjónustu</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-[2.5rem] bg-[var(--black)] p-8 text-[var(--white)] shadow-2xl"
          >
            <div className="rounded-[2rem] border border-[var(--border-gold-strong)] bg-[var(--forest)]/40 p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
                Lífskraftur kerfið
              </p>

              <h2
                className={`${display.className} mt-5 text-4xl font-semibold`}
              >
                Skýrt og einfalt kerfi - langvarandi árangur.
              </h2>

              <div className="mt-8 space-y-5">
                {[
                  "Styrktaræfingar sem byggja vöðva og sjálfstraust",
                  "Einföld næring án öfga",
                  "Daglegar venjur sem halda þér á réttri braut",
                  "Eftirfylgni og aðhald",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)]" />
                    <span className="text-[var(--white)]/85">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="thjonusta" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--sand)]">
            Þjónustan
          </p>

          <h2
            className={`${display.className} mt-3 max-w-3xl text-5xl font-semibold tracking-tight`}
          >
            Ekki bara æfingaplan. Kerfi fyrir lífið.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--foreground)]/70">
            Markmiðið er ekki fullkomnun. Markmiðið er að setja upp kerfi sem
            gerir rétta hegðun sjálfvirka.
          </p>

          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<Dumbbell className="h-6 w-6" />}
              title="Styrktarþjálfun"
              text="Æfingar sem byggja vöðva, líkamsstöðu, styrk og sjálfstraust."
            />
            <FeatureCard
              icon={<Leaf className="h-6 w-6" />}
              title="Næring"
              text="Einfalt mataræði sem styður orku, meltingu og árangur."
            />
            <FeatureCard
              icon={<HeartPulse className="h-6 w-6" />}
              title="Endurheimt"
              text="Svefn, streitustjórnun og rólegra taugakerfi."
            />
          </div>
        </div>
      </section>

      <section id="ferlid" className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--sand)]">
              Fyrir hvern?
            </p>

            <h2
              className={`${display.className} mt-3 text-5xl font-semibold tracking-tight`}
            >
              Fyrir menn sem vilja verða sterkari, rólegri og agaðri — án öfga.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--foreground)]/70">
              Fyrir menn sem vilja koma sér aftur á rétta braut með skýrari
              rútínu, betri heilsu og meiri stjórn á daglegu lífi.
            </p>
          </div>

          <div className="space-y-4">
            <Step
              number="01"
              title="Við förum yfir stöðuna"
              text="Markmið, venjur og hvað hefur haldið aftur af þér hingað til."
            />

            <Step
              number="02"
              title="Við setjum upp skýrt kerfi"
              text="Æfingar, næring og venjur sem passa inn í raunverulegt líf."
            />

            <Step
              number="03"
              title="Við höldum þér á réttri braut"
              text="Regluleg eftirfylgni, aðlögun og stuðningur þegar þarf."
            />
          </div>
        </div>
      </section>

      <section id="verd" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--sand)]">
            Verðskrá
          </p>

          <div className="mt-12 grid items-stretch gap-6 text-left md:grid-cols-3">
            <PriceCard
              title="Lífskraftur Silfur"
              price="29.900 kr. / mán"
              description="Skýrt plan og öflug byrjun."
              items={[
                "Aðgangur að appi",
                "Æfingaplan",
                "Næringarplan",
                "Samskipti með skilaboðum",
              ]}
            />

            <PriceCard
              title="Lífskraftur Gull"
              price="49.900 kr. / mán"
              description="Meiri leiðsögn og vikulegt aðhald."
              highlighted
              items={[
                "Allt í Silfur",
                "Sérsniðið æfingaplan",
                "Næringarleiðsögn",
                "Vikulegur fjarfundur",
                "Aðlögun og eftirfylgni",
              ]}
            />

            <PriceCard
              title="Lífskraftur Platína"
              price="99.900 kr. / mán"
              description="Nánari stuðningur og meiri ábyrgð."
              items={[
                "Allt í Gull",
                "Tíðari samskipti",
                "Forgangur í svörum",
                "Ítarlegri aðlögun að rútínu og lífsstíl",
                "Persónulegri stuðningur",
              ]}
            />
          </div>
        </div>
      </section>

      <section id="samtal" className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[var(--black)] p-10 text-center text-[var(--white)] shadow-2xl shadow-black/25 md:p-16">
          <Sparkles className="mx-auto h-10 w-10 text-[var(--gold)]" />

          <h2
            className={`${display.className} mt-6 text-5xl font-semibold tracking-tight`}
          >
            Vegferðin hefst með einföldu samtali.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--white)]/75">
            Við förum yfir stöðuna og markmiðin og gerum plan.
          </p>

          <Button
            size="lg"
            className="mt-8 rounded-full bg-[var(--gold)] px-8 py-6 text-base text-[var(--foreground)] shadow-xl shadow-black/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[var(--gold-dark)] hover:text-[var(--white)] hover:shadow-2xl"
            asChild
          >
            <a href="https://forms.gle/oLvRj2G36zMtDkBg6" target="_blank">
              <MessageCircle className="mr-2 h-5 w-5" />
              Bóka frían fund
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <Card className="flex h-full flex-col rounded-[2rem] border-[var(--border-gold)] bg-white shadow-xl shadow-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-2xl">
      <CardContent className="flex h-full flex-col p-8">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--forest)] text-[var(--gold)]">
          {icon}
        </div>

        <h3 className={`${display.className} text-2xl font-semibold`}>
          {title}
        </h3>

        <p className="mt-3 leading-7 text-[var(--foreground)]/70">{text}</p>
      </CardContent>
    </Card>
  );
}

function Step({ number, title, text }: StepProps) {
  return (
    <div className="rounded-[2rem] border border-[var(--border-gold)] bg-[var(--background)] p-6 shadow-sm">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
        {number}
      </div>

      <h3 className={`${display.className} mt-2 text-2xl font-semibold`}>
        {title}
      </h3>

      <p className="mt-2 leading-7 text-[var(--foreground)]/70">{text}</p>
    </div>
  );
}

function PriceCard({
  title,
  price,
  description,
  items,
  highlighted = false,
}: PriceCardProps) {
  return (
    <Card
      className={`flex h-full flex-col rounded-[2rem] shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl ${
        highlighted
          ? "border-[var(--forest)] bg-[var(--forest)] text-[var(--white)] shadow-black/20"
          : "border-[var(--border-gold)] bg-white text-[var(--foreground)] shadow-black/5"
      }`}
    >
      <CardContent className="flex h-full flex-col p-8">
        <h3
          className={`${display.className} min-h-[76px] text-3xl font-semibold`}
        >
          {title}
        </h3>

        <p
          className={`mt-3 min-h-[56px] leading-7 ${
            highlighted
              ? "text-[var(--white)]/75"
              : "text-[var(--foreground)]/65"
          }`}
        >
          {description}
        </p>

        <div
          className={`${display.className} mt-6 min-h-[50px] text-4xl font-semibold text-[var(--gold)]`}
        >
          {price}
        </div>

        <ul className="mt-8 flex-1 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <CheckCircle2
                className={`mt-0.5 h-5 w-5 shrink-0 ${
                  highlighted ? "text-[var(--gold)]" : "text-[var(--forest)]"
                }`}
              />
              <span
                className={
                  highlighted
                    ? "text-[var(--white)]/85"
                    : "text-[var(--foreground)]/70"
                }
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
