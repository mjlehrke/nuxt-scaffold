import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';
import App from '../app.vue';

describe('app.vue', () => {
  it('can mount the app', async () => {
    const component = await mountSuspended(App);

    expect(component.text()).toContain('Welcome to Nuxt!');
    expect(component.html()).toMatchInlineSnapshot(`
      "<div>
        <div data-v-433a9abd="" class="layout">
          <div data-v-02281a80="">
            <h1 data-v-02281a80="">Welcome to Nuxt!</h1>
            <p data-v-02281a80="">(^^^ that was a component ^^^)</p>
            <div data-v-02281a80="" class="nav"><a data-v-02281a80="" href="/about">About Page</a><a data-v-02281a80="" href="/docs/thing">Content Thing</a></div>
            <div data-v-02281a80="" class="composable"> Composable: <button data-v-02281a80="">0</button></div>
            <div data-v-02281a80="" class="formkit">
              <div data-v-02281a80="" class="formkit-outer" data-type="select">
                <div class="formkit-wrapper"><label class="formkit-label" for="input_0">FormKit is here too</label>
                  <div class="formkit-inner">
                    <!---->
                    <!----><select class="formkit-input" id="input_0" name="select_1">
                      <option class="formkit-option" selected="" value="one">one</option>
                      <option class="formkit-option" value="two">two</option>
                      <option class="formkit-option" value="three">three</option>
                    </select><span class="formkit-select-icon formkit-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 7"><path d="M8,6.5c-.13,0-.26-.05-.35-.15L3.15,1.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l4.15,4.15L12.15,1.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71l-4.5,4.5c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"></path></svg></span>
                    <!---->
                    <!---->
                  </div>
                </div>
                <!---->
                <!---->
              </div>
            </div>
            <p data-v-02281a80="">In the &lt;head&gt; tags are some SEO things too!</p>
          </div>
          <p data-v-433a9abd="" class="note"> (This page is using the default layout) </p>
        </div>
      </div>"
    `);
  });
});
