import { FC } from "react";
type Props = {
    handleOrderForm: (event: any) => void
}
const CustomerDetails: FC<Props> = ({ handleOrderForm }) => {

    return (
        <>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal fade" id="staticBackdrop"
                    data-bs-backdrop="static" data-bs-keyboard="false"
                    tabIndex={-1} aria-labelledby="staticBackdropLabel"
                    aria-hidden="true">

                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">
                                    Customer Details.
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={(e) => {
                                    e.preventDefault()
                                }
                                }>
                                    <input
                                        type="text"
                                        name="customer_first_name"
                                        className="form-control w-100 center my-4 text-center "
                                        placeholder="customer's first name"
                                        required
                                        aria-label="Username"
                                        onChange={handleOrderForm}></input>
                                    <input
                                        type="text"
                                        name="customer_last_name"
                                        className="form-control w-100 center my-4 text-center "
                                        placeholder="customer's last name"
                                        required
                                        aria-label="Username"
                                        onChange={handleOrderForm}></input>
                                    <input
                                        type="text"
                                        name="customer_mobile"
                                        className="form-control w-100 center my-4 text-center "
                                        placeholder="customer's phone number"
                                        required
                                        aria-label="Username"
                                        onChange={handleOrderForm}></input>
                                    <button
                                        onClick={(e) => e.preventDefault()}
                                        className="btn btn-primary w-50 fs-lg text-center"
                                        data-bs-dismiss="modal">
                                        Update details.
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerDetails;
