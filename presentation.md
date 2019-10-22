%title: How Do I Test That?
%author: Noah Seger
%date: 2017-03-02

-> Patterns and Tools for Autopilot <-
======================================

---

-> # What do we want to test? <-

---

-> # What do we want to test? <-

-> TRICK QUESTION, EVERYTHING! <-

---

-> # What do we want to test? <-

-> Specifically, every behavior. <-

---

-> # Unit tests are a catalogue of behaviors <-

---

-> # Unit tests are a catalogue of behaviors <-

> By reading the test names, you should easily understand the what the system
does.

---

-> # Unit tests are a catalogue of behaviors <-

> By reading the test names, you should easily understand the what the system
does.

> By reading the test bodies, you should easily understand the interface for
accomplishing the behavior under test.

---

-> # Unit tests are a catalogue of behaviors <-

> By reading the test names, you should easily understand the what the system
does.

> By reading the test bodies, you should easily understand the interface for
accomplishing the behavior under test.

> Aim for tests that capture the problem with such clarity that you would prefer
to lose your production code than to lose your tests.

---

-> # Unit tests are a catalogue of behaviors <-

> By reading the test names, you should easily understand the what the system
does.

> By reading the test bodies, you should easily understand the interface for
accomplishing the behavior under test.

> Aim for tests that capture the problem with such clarity that you would prefer
to lose your production code than to lose your tests.

> If you can rebuild from your tests, you can refactor with confidence.

---

-> # Code Coverage <-

---

-> # Patterns <-

* Purely functional components
* Stateful components with Fluxible stores
* Setting up a DOM to test component lifecycles
* Action dispatch
* Library helpers
* Integration testing of Hapi routes
* etc.

---

-> # Tools <-

* Enzyme with `chai-enzyme`
* Sinon spies and mocks
* `proxyquire`
* `mock-browser`
* Coverage with `nyc`

---

-> # Stretch <-

* CSS regression testing with Backstop

---
