const { Button, Card, PhoneFrame, Screen, ScreenHeader, StepHeader, Sticker } = window.SEMASAPIKNIK2026DesignSystem_c74c54;

/* Set to true to bring the "Choose Your Type" step back into the flow.
   Everything else (labels, step numbers, Edit links) follows automatically. */
const SP_SHOW_VISITOR_TYPE = false;

const SP_FLOW = [
  { route: "type", label: "Visitor Type", enabled: SP_SHOW_VISITOR_TYPE },
  { route: "personal", label: "Personal Data", enabled: true },
  { route: "visit", label: "Visit Details", enabled: true },
  { route: "confirm", label: "Confirmation", enabled: true },
  { route: "ticket", label: "E-Ticket", enabled: true }
].filter(s => s.enabled);

const SP_STEPS = SP_FLOW.map(s => s.label);
const SP_INDEX = route => SP_FLOW.findIndex(s => s.route === route);

function makeTicketId() {
  return "SP26-" + Math.random().toString(36).slice(2, 8).toUpperCase();
}

const SP_EMPTY = {
  visitorType: "", fullName: "", email: "", phone: "", dateOfBirth: "",
  visitDate: "", visitTime: "", purpose: ""
};

function RegistrationApp() {
  const [route, setRoute] = React.useState("landing");
  const [data, setData] = React.useState(SP_EMPTY);
  const [ticket, setTicket] = React.useState(null);
  const patch = p => setData(d => ({ ...d, ...p }));

  const step = SP_INDEX(route);
  const go = r => setRoute(r);
  const goStep = i => setRoute(SP_FLOW[Math.max(0, Math.min(SP_FLOW.length - 1, i))].route);
  const next = () => goStep(step + 1);
  const back = () => (step <= 0 ? setRoute("landing") : goStep(step - 1));
  const submit = () => { setTicket({ id: makeTicketId(), issuedAt: new Date().toISOString() }); go("ticket"); };
  const restart = () => { setData(SP_EMPTY); setTicket(null); setRoute("landing"); };

  return (
    <PhoneFrame>
      {route === "landing" ? (
        <LandingScreen onStart={() => goStep(0)} />
      ) : (
        <Screen>
          <StepHeader steps={SP_STEPS} current={step} onStepClick={i => { if (i < step) goStep(i); }} />
          {route === "type" ? <VisitorTypeScreen data={data} patch={patch} onNext={next} onBack={back} /> : null}
          {route === "personal" ? <PersonalDataScreen data={data} patch={patch} onNext={next} onBack={back} /> : null}
          {route === "visit" ? <VisitDetailScreen data={data} patch={patch} onNext={next} onBack={back} /> : null}
          {route === "confirm" ? <ConfirmationScreen data={data} onEdit={go} onConfirm={submit} onBack={back} /> : null}
          {route === "ticket" ? <TicketScreen data={data} ticket={ticket} onRestart={restart} /> : null}
        </Screen>
      )}
    </PhoneFrame>
  );
}

Object.assign(window, { RegistrationApp, SP_STEPS, SP_FLOW, SP_SHOW_VISITOR_TYPE });
