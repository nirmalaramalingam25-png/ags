import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Specializations from "@/pages/Specializations";
import SpecializationDetail from "@/pages/SpecializationDetail";
import Testimonials from "@/pages/Testimonials";
import JobSeekers from "@/pages/JobSeekers";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/specializations" component={Specializations} />
      <Route path="/specializations/:id" component={SpecializationDetail} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/job-seekers" component={JobSeekers} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
