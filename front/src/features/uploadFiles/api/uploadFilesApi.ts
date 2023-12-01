import { rtkApi } from '~/shared/api/rtkApi';

export interface SendFilesProps {
	files: FormData;
}

const uploadFilesApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		sendFiles: build.mutation<void, SendFilesProps>({
			query: (props: SendFilesProps) => ({
				url: '/v1/requests/',
				method: 'POST',
				body: props.files
			}),
			invalidatesTags: ['history']
		})
	})
});

export const { useSendFilesMutation } = uploadFilesApi;
