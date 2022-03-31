import {FunctionComponent} from 'preact';
import Button from '@components/Button';

const Contact: FunctionComponent = () => {
  return (
    <section class="flex flex-col items-center px-4 my-16">
      <div class="flex flex-col items-center border p-8 w-fit">
        <p class="text-xl text-center">Envie de collaborer sur un projet&nbsp;?</p>
        <a class="mt-8 block" href="mailto:pierre.j.salaun@gmail.com"><Button icon="external">Me contacter</Button></a>
      </div>
    </section>
  );
}

export default Contact;