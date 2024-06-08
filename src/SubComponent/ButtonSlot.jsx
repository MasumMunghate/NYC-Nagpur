const ButtonSlot = ({ value }) => {
  return (
    <>
      <button class="tw-relative tw-px-3 tw-py-2 tw-overflow-hidden tw-w-40 tw-m-auto tw-text-white tw-font-bold tw-bg-custom-red tw-border tw-border-gray-100 tw-rounded-lg tw-shadow-inner tw-group">
        <span class="tw-absolute tw-top-0 tw-left-0 tw-w-0 tw-h-0 tw-transition-all tw-duration-200 tw-border-t-2 tw-border-gray-600 group-hover:tw-w-full tw-ease"></span>
        <span class="tw-absolute tw-bottom-0 tw-right-0 tw-w-0 tw-h-0 tw-transition-all tw-duration-200 tw-border-b-2 tw-border-gray-600 group-hover:tw-w-full tw-ease"></span>
        <span class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-0 tw-transition-all tw-duration-300 tw-delay-200 tw-bg-gray-600 group-hover:tw-h-full tw-ease"></span>
        <span class="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-h-0 tw-transition-all tw-duration-300 tw-delay-200 tw-bg-gray-600 group-hover:tw-h-full tw-ease"></span>
        <span class="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-duration-300 tw-delay-300 tw-bg-gray-900 tw-opacity-0 group-hover:tw-opacity-100"></span>
        <span class="tw-relative tw-transition-colors tw-duration-300 tw-delay-200 group-hover:tw-text-white tw-ease">
          {value}
        </span>
      </button>
    </>
  );
};

export default ButtonSlot;
