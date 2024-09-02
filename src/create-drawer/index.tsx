import ReactDOM from 'react-dom';
import DrawerForm from '../form-submit/drawer-form';
import { useEffect } from 'react';
import { DrawerFormProps } from '../index';
import { uuid } from '../util';
import { create } from '@yl-d/hooks';

const closeModal = (containId: string, store: any) => {
  store.visible = false;
  setTimeout(() => {
    $(`#${containId}`)?.remove();
  }, 500);
};

const $: any = document.querySelector.bind(document);

export const DrawerFormWapper = ({
  tag,
  containId,
  drawerProps = {},
  store,
  ...props
}) => {
  const { visible } = store.useSnapshot();
  useEffect(() => {
    store.visible = true;
    // hash 改变 卸载
    window.addEventListener(
      'hashchange',
      () => {
        closeModal(containId, store);
      },
      { once: true },
    );
  }, []);
  return (
    <DrawerForm
      {...props}
      visible={visible}
      drawerProps={
        {
          ...drawerProps,
          id: containId,
        } as any
      }
      onClose={() => {
        props.onClose?.();
        closeModal(containId, store);
      }}
    />
  );
};

export const CreateDrawerForm = (props) => {
  const tag = document.createElement('div');
  $('body').appendChild(tag);
  ReactDOM.render(<DrawerFormWapper {...props} tag={tag} />, tag);
};

export default (options: DrawerFormProps) => {
  const containId = `drawerId_${uuid(6)}`;
  const store = create({
    visible: false,
  });
  return {
    open: (config?: DrawerFormProps) => {
      const props: any = {
        ...options,
        ...config,
      };
      CreateDrawerForm({
        ...props,
        containId,
        store,
        onSubmit: async (data) => {
          await props.onSubmit?.(data);
          closeModal(containId, store);
        },
      });
    },
    close() {
      closeModal(containId, store);
    },
  };
};
