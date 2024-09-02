import ReactDOM from 'react-dom';
import ModalForm from '../form-submit/modal-form';
import { useEffect } from 'react';
import { ModalFormProps } from '../index';
import { uuid } from '../util';
import { create } from '@yl-d/hooks';

const $: any = document.querySelector.bind(document);

const closeModal = (containId: string, store: any) => {
  store.visible = false;
  setTimeout(() => {
    $(`#${containId}`)?.parentNode?.remove();
  }, 500);
};

const ModalFormWapper = ({ containId, tag, modalProps, store, ...props }) => {
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
    <ModalForm
      {...props}
      visible={visible}
      onClose={() => {
        props.onClose?.();
        closeModal(containId, store);
      }}
      modalProps={{
        ...modalProps,
        id: containId,
      }}
    />
  );
};

const CreateModalForm = (props) => {
  const tag = document.createElement('div');
  $('body').appendChild(tag);
  ReactDOM.render(<ModalFormWapper {...props} tag={tag} />, tag);
};

export default (options: ModalFormProps) => {
  const containId = `modalId_${uuid(6)}`;
  const store = create({
    visible: false,
  });
  return {
    open: async (config?: ModalFormProps) => {
      const props: any = {
        ...options,
        ...config,
      };
      CreateModalForm({
        ...props,
        containId,
        store,
        onSubmit: async (data) => {
          await props.onSubmit?.(data);
          closeModal(containId, store); // 关闭
        },
      });
    },
    close() {
      closeModal(containId, store);
    },
  };
};
