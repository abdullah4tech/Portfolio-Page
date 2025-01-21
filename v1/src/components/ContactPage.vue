
<template>
  <div class="container">
    <div class="background" aria-hidden="true">
      <div class="clip-path" />
    </div>
    <div class="text-center">
      <h2>Contact Me</h2>
    </div>
    <form action="#" method="POST" class="form">
      <div class="grid">
        <div>
          <label for="first-name">First name</label>
          <div class="input-container">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" />
          </div>
        </div>
        <div>
          <label for="last-name">Last name</label>
          <div class="input-container">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" />
          </div>
        </div>
        <div class="full-width">
          <label for="email">Email</label>
          <div class="input-container">
            <input type="email" name="email" id="email" autocomplete="email" />
          </div>
        </div>
        <div class="full-width">
          <label for="message">Message</label>
          <div class="input-container">
            <textarea name="message" id="message" rows="4" />
          </div>
        </div>
      </div>
      <div class="submit-container">
        <button type="submit">Let's talk</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  padding: 24px 6px;
}
@media (min-width: 640px) {
  .container {
    padding: 32px 6px;
  }
}
@media (min-width: 1024px) {
  .container {
    padding: 24px 8px;
  }
}
.background {
  position: absolute;
  inset: 0 0 -10rem;
  z-index: -10;
  overflow: hidden;
  filter: blur(3xl);
  transform: translateY(-20rem);
}
.clip-path {
  position: relative;
  left: 50%;
  z-index: -10;
  aspect-ratio: 1155 / 678;
  width: 36.125rem;
  max-width: none;
  transform: translateX(-50%) rotate(30deg);
  background: linear-gradient(to top right, #ff80b5, #9089fc);
  opacity: 0.3;
  clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);
}
@media (min-width: 640px) {
  .clip-path {
    left: calc(50% - 40rem);
    width: 72.1875rem;
  }
}
.text-center {
  text-align: center;
  max-width: 2xl;
  margin: 0 auto;
}
.text-center h2 {
  font-size: 1.875rem;
  font-weight: bold;
  line-height: 2.25rem;
  color: white;
}
@media (min-width: 640px) {
  .text-center h2 {
    font-size: 2.25rem;
  }
}
.text-center p {
  margin-top: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #4b5563;
}
.form {
  margin-top: 4rem;
  max-width: xl;
  margin: 0 auto;
}
@media (min-width: 640px) {
  .form {
    margin-top: 5rem;
  }
}
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem 2rem;
}
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.full-width {
  grid-column: span 2 / span 2;
}
.input-container {
  margin-top: 0.625rem;
}
.input-container input,
.input-container textarea {
  width: 100%;
  border-radius: 0.375rem;
  border: 0;
  padding: 0.875rem 1rem;
  color: #1f2937;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  ring: 1px solid;
  ring-inset: 1px solid #d1d5db;
  placeholder-color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.25rem;
  resize: vertical;
}
.input-container input:focus,
.input-container textarea:focus {
  ring-color: #4f46e5;
}
.relative-container {
  position: relative;
  margin-top: 0.625rem;
}
.select-container {
  position: absolute;
  inset: 0 0 auto;
  display: flex;
  align-items: center;
}
.select-container select {
  height: 100%;
  border-radius: 0.375rem;
  border: 0;
  background: transparent;
  padding-left: 1rem;
  padding-right: 2.25rem;
  color: #9ca3af;
  font-size: 0.875rem;
}
.chevron-icon {
  position: absolute;
  right: 0.75rem;
  height: 100%;
  width: 1.25rem;
  color: #9ca3af;
}
.relative-container input {
  padding-left: 5rem;
}
.switch-group {
  display: flex;
  gap: 1rem;
  grid-column: span 2 / span 2;
}
.switch-container {
  display: flex;
  height: 1.5rem;
  align-items: center;
}
.switch-on {
  background-color: #4f46e5;
}
.switch-off {
  background-color: #e5e7eb;
}
.switch-container .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.switch-container span {
  height: 1rem;
  width: 1rem;
  border-radius: 9999px;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  ring: 1px solid;
  ring-inset: 1px solid rgba(0, 0, 0, 0.05);
}
.switch-thumb-on {
  transform: translateX(1rem);
}
.switch-thumb-off {
  transform: translateX(0);
}
.switch-label {
  font-size: 0.875rem;
line-height: 1.25rem;
color: #4b5563;
align-self: center;
}
.privacy-policy-link {
font-weight: bold;
color: #4f46e5;
}
.submit-container {
margin-top: 2.5rem;
}
.submit-container button {
width: 100%;
border-radius: 0.375rem;
background-color: #4f46e5;
padding: 0.875rem;
text-align: center;
font-size: 0.875rem;
font-weight: bold;
color: white;
box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
cursor: pointer;
transition: background-color 0.2s ease-in-out;
}
.submit-container button
{
background-color: #4338ca;
}

label{
  color: white;
}
</style>