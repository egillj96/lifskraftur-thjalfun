import React from "react";
import { motion } from "framer-motion";
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

export default function LifskrafturLandingPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <section className="relative overflow-hidden px-6 py-8 md:px-12 lg:px-20">
        <nav className="mx-auto flex max-w-6xl items-center justify-between py-4">
          <div className="text-xl font-semibold tracking-tight">
            Lífskraftur
          </div>
          <div className="hidden gap-8 text-sm text-stone-700 md:flex">
            <a href="#thjonusta" className="hover:text-stone-950">
              Þjónusta
            </a>
            <a href="#ferlid" className="hover:text-stone-950">
              Ferlið
            </a>
            <a href="#verd" className="hover:text-stone-950">
              Verð
            </a>
          </div>
          <Button className="rounded-2xl">Bóka samtal</Button>
        </nav>

        <div className="mx-auto grid max-w-6xl items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 inline-flex rounded-full bg-stone-200 px-4 py-2 text-sm font-medium text-stone-700">
              Sönn íslensk heilsa
            </p>
            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Byggðu líkama, orku og sjálfsvirðingu.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
              Lífskraftur er þjálfun og lífsstílscoaching fyrir menn sem vilja
              koma sér í form, borða betur, sofa betur og finna meiri ró — án
              þess að gera heilsuna að fullu starfi.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="rounded-2xl px-8">
                Sækja um coaching
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl px-8">
                Sjá þjónustu
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-[2rem] bg-stone-900 p-8 text-stone-50 shadow-2xl"
          >
            <div className="rounded-[1.5rem] border border-stone-700 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-stone-400">
                Lífskraftur kerfið
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Einfalt. Mannlegt. Framkvæmanlegt.
              </h2>
              <div className="mt-8 space-y-5">
                {[
                  "3–4 styrktaræfingar á viku",
                  "Skýr næring án öfga",
                  "Svefn, streita og endurheimt",
                  "Vikulegt accountability og leiðréttingar",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-stone-300" />
                    <span className="text-stone-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="thjonusta" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              Þjónustan
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Ekki bara æfingaplan. Kerfi fyrir lífið.
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-700">
              Markmiðið er ekki að vera fullkominn. Markmiðið er að setja upp
              kerfi sem gerir réttu hegðunina auðveldari.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<Dumbbell />}
              title="Styrktarþjálfun"
              text="Æfingar sem byggja vöðva, líkamsstöðu, styrk og sjálfstraust. Skýrt plan, progression og aðlögun."
            />
            <FeatureCard
              icon={<Leaf />}
              title="Næring"
              text="Einfalt mataræði sem styður orku, meltingu og árangur — án þess að þú þurfir að lifa í Excel-skjali."
            />
            <FeatureCard
              icon={<HeartPulse />}
              title="Endurheimt"
              text="Svefn, streitustjórnun, ganga, teygjur og rólegra taugakerfi sem halda þér stöðugum til lengri tíma."
            />
          </div>
        </div>
      </section>

      <section id="ferlid" className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                Fyrir hvern?
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                Fyrir menn sem vilja byrja almennilega.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-700">
                Sérstaklega fyrir byrjendur eða menn sem hafa misst taktinn:
                lítil orka, óreglulegar æfingar, óljóst mataræði og tilfinningin
                að þeir viti ekki hvar á að byrja.
              </p>
            </div>
            <div className="space-y-4">
              <Step
                number="01"
                title="Við skýrum stöðuna"
                text="Markmið, venjur, tími, mataræði, svefn og hvað hefur stoppað þig hingað til."
              />
              <Step
                number="02"
                title="Við setjum upp kerfið"
                text="Æfingar, næring, daglegar venjur og einföld mælikerfi."
              />
              <Step
                number="03"
                title="Við stillum af í hverri viku"
                text="Þú færð accountability, feedback og breytingar eftir því hvernig líkaminn bregst við."
              />
            </div>
          </div>
        </div>
      </section>

      <section id="verd" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              Tilboð
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Veldu hversu mikinn stuðning þú vilt.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <PriceCard
              title="Grunnur"
              price="29.990 kr."
              description="Fyrir þig sem vilt skýrt plan og byrjun."
              items={[
                "Æfingaplan",
                "Næringargrunnur",
                "Upphafssamtal",
                "2 vikna eftirfylgni",
              ]}
            />
            <PriceCard
              title="Lífskraftur Coaching"
              price="79.990 kr."
              description="12 vikna coaching með vikulegri eftirfylgni."
              highlighted
              items={[
                "Sérsniðið æfingaplan",
                "Mataræðisrammi",
                "Vikuleg check-in",
                "Skilaboðastuðningur",
                "Aðlögun eftir árangri",
              ]}
            />
            <PriceCard
              title="Premium"
              price="149.990 kr."
              description="Meiri nálægð, dýpri vinna og meiri ábyrgð."
              items={[
                "Allt í coaching",
                "Vikulegt símtal",
                "Lífsstíls- og venjugreining",
                "Forgangsstuðningur",
                "Meiri persónuleg aðlögun",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-stone-900 p-10 text-center text-stone-50 shadow-2xl md:p-16">
          <Sparkles className="mx-auto h-10 w-10 text-stone-300" />
          <h2 className="mt-6 text-4xl font-semibold tracking-tight">
            Byrjaðu með einföldu samtali.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-300">
            Við skoðum stöðuna þína, markmiðin og hvort Lífskraftur coaching sé
            rétta kerfið fyrir þig.
          </p>
          <Button
            size="lg"
            className="mt-8 rounded-2xl bg-stone-50 px-8 text-stone-950 hover:bg-stone-200"
          >
            <MessageCircle className="mr-2 h-5 w-5" /> Bóka ókeypis samtal
          </Button>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <Card className="rounded-3xl border-stone-200 bg-white shadow-sm">
      <CardContent className="p-8">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-stone-800">
          {React.cloneElement(icon, { className: "h-6 w-6" })}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-3 leading-7 text-stone-700">{text}</p>
      </CardContent>
    </Card>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
      <div className="text-sm font-semibold text-stone-400">{number}</div>
      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      <p className="mt-2 leading-7 text-stone-700">{text}</p>
    </div>
  );
}

function PriceCard({ title, price, description, items, highlighted = false }) {
  return (
    <Card
      className={`rounded-3xl shadow-sm ${highlighted ? "border-stone-900 bg-stone-900 text-stone-50" : "border-stone-200 bg-white"}`}
    >
      <CardContent className="p-8">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p
          className={`mt-3 leading-7 ${highlighted ? "text-stone-300" : "text-stone-700"}`}
        >
          {description}
        </p>
        <div className="mt-6 text-4xl font-semibold">{price}</div>
        <ul className="mt-8 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <CheckCircle2
                className={`mt-0.5 h-5 w-5 ${highlighted ? "text-stone-300" : "text-stone-700"}`}
              />
              <span
                className={highlighted ? "text-stone-200" : "text-stone-700"}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
        <Button
          className={`mt-8 w-full rounded-2xl ${highlighted ? "bg-stone-50 text-stone-950 hover:bg-stone-200" : ""}`}
          variant={highlighted ? "default" : "outline"}
        >
          Velja þetta
        </Button>
      </CardContent>
    </Card>
  );
}
