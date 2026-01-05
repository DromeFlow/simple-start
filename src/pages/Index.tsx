import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Workflow } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Workflow className="h-4 w-4" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">Fluxo Simples</span>
              <span className="text-[11px] text-muted-foreground">Seu ponto de partida</span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <button className="hover:text-foreground">Recursos</button>
            <button className="hover:text-foreground">Como funciona</button>
            <button className="hover:text-foreground">Perguntas</button>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Entrar
            </Button>
            <Button variant="hero" size="sm">
              Começar agora
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="hero-section">
        <section className="hero-shell">
          <div className="flex-1 space-y-8 text-left text-balance text-foreground">
            <span className="badge-soft">
              <Sparkles className="h-3 w-3 text-primary" />
              Projeto pronto para você começar
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                Simples &amp; moderno
              </span>
            </span>

            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                Tire suas ideias do papel em minutos.
              </h1>
              <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
                Este é um ponto de partida elegante para qualquer projeto web. Adapte o texto, cores e seções para
                transformar em um portfólio, landing page de produto ou painel interno.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button variant="hero" size="lg">
                Criar meu primeiro fluxo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Ver exemplos
              </Button>
              <p className="w-full text-xs text-muted-foreground sm:w-auto">
                Sem configuração complicada. Comece simples e evolua depois.
              </p>
            </div>

            <dl className="grid max-w-xl grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Para começar</dt>
                <dd className="mt-1 text-lg font-semibold">Sem backend obrigatório</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Foco</dt>
                <dd className="mt-1 text-lg font-semibold">Interface clara e moderna</dd>
              </div>
            </dl>
          </div>

          <div className="mt-10 flex flex-1 justify-center lg:mt-0">
            <div className="hero-card w-full max-w-md">
              <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Quadro do seu projeto</span>
                <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] uppercase tracking-[0.16em]">
                  Exemplo
                </span>
              </div>

              <div className="mb-3 grid grid-cols-3 gap-2 text-[11px]">
                <div className="rounded-xl bg-muted/80 p-3">
                  <p className="mb-1 text-[10px] font-medium text-muted-foreground">Ideias</p>
                  <p className="font-semibold">Capture tudo
                  </p>
                </div>
                <div className="rounded-xl bg-secondary/90 p-3">
                  <p className="mb-1 text-[10px] font-medium text-secondary-foreground/80">Prioridades</p>
                  <p className="font-semibold text-secondary-foreground">Organize seu foco</p>
                </div>
                <div className="rounded-xl bg-primary/10 p-3">
                  <p className="mb-1 text-[10px] font-medium text-primary">Próximos passos</p>
                  <p className="font-semibold text-foreground">Defina ações claras</p>
                </div>
              </div>

              <div className="space-y-3 rounded-2xl bg-background/90 p-4 text-xs shadow-inner">
                <p className="section-title">Comece pequeno</p>
                <p className="section-body">
                  Você pode usar este layout para qualquer coisa: registrar tarefas, validar uma ideia, criar um
                  mini-produto ou simplesmente experimentar componentes.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary">
                    UI pronta
                  </span>
                  <span className="rounded-full bg-accent/10 px-2 py-1 text-[10px] font-medium text-accent-foreground">
                    Responsivo
                  </span>
                  <span className="rounded-full bg-muted px-2 py-1 text-[10px] font-medium text-muted-foreground">
                    Tailwind + React
                  </span>
                </div>

                <Button variant="subtle" size="sm" className="mt-2 w-full justify-between">
                  Personalizar este bloco
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border/60 bg-background/80">
          <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-3">
            <div className="space-y-3">
              <h2 className="section-heading">Começo rápido</h2>
              <p className="section-body">
                Edite textos, cores e layout para adaptar a qualquer projeto. O objetivo aqui é te dar um ponto de
                partida bonito, sem excesso.
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-medium text-foreground">Para quem?</p>
              <p className="text-muted-foreground">
                Pessoas que querem tirar ideias do papel sem perder tempo com detalhes técnicos. Ideal para projetos
                pessoais, MVPs e demos.
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-medium text-foreground">Próximos passos</p>
              <p className="text-muted-foreground">
                Você pode adicionar novas páginas, conectar um backend, criar formulários, autenticação e muito mais a
                partir desta base simples.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-background/80">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground md:flex-row">
          <span>Projeto base em React + Tailwind. Personalize do seu jeito.</span>
          <span className="flex gap-3">
            <button className="hover:text-foreground">Documentação</button>
            <button className="hover:text-foreground">Feedback</button>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
